const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier");

module.exports = function(config) {  
  config.addPlugin(pluginRss);

  // Markdown
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  const slugify = require("slugify");
  let opts = {
      // permalink: true,
      // permalinkClass: "direct-link",
      // permalinkSymbol: "#",
  
      // this is the same function shared above
      slugify: function(input) {
        const options = {
          replacement: "-",
          remove: /[&,+()$~%.'":*?<>{}]/g,
          lower: true
        };
        return slugify(input, options);
      }
  };
  config.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );
  config.setDynamicPermalinks(true);
  config.addPassthroughCopy({"src/site/favicon.ico": "./favicon.ico"});
  config.addPassthroughCopy({'src/_cms/img': 'img'});
  config.addPassthroughCopy({'src/site/admin': 'admin'});

  config.addTransform("htmlmin", function(content, outputPath) {
    if ( outputPath && outputPath.endsWith('.html') ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified;
    }

    return content;
  });

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("DDD");
  });

  config.addFilter('copyDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
  });
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy/LL/dd');
  });
  config.addFilter("slugslug", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,#+()$~%.;'":*?<>{}]/g,
      lower: true
    };
    return slugify(input, options);
  });
  config.addFilter("stripDate", (input) => {
    const options = {
      replacement: "-",
      remove: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$[&,#+()$~%.;'":*?<>{}]—/g,
      // remove: /[&,#+()$~%.;'":*?<>{}]—/g,
      lower: true
    };
    return slugify(input, options);
    
  })
  // Get the first `n` elements of a collection.
  config.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });
  // Homepage Collections
  config.addCollection('marquee', collection => {
    return collection.getFilteredByGlob('**/content/homepage/marquee.md')
  })  
  config.addCollection('supplemental', collection => {
    return collection.getFilteredByGlob('**/content/homepage/supplemental.md')
  })
  config.addCollection('modal', collection => {
    return collection.getFilteredByGlob('**/content/homepage/modal.md')
  })
  // Structured Content Collections
  config.addCollection('posts', collection => {
    return collection.getFilteredByGlob('**/content/posts/*.md').reverse()
  })  
  config.addCollection('platform', collection => {
    return collection.getFilteredByGlob('**/content/platform/*.md').reverse()
  })  

  config.addCollection("tagList", require("./_11ty/tags"));

  return {
    dir: {
      input: "./src/",
      output: "public",
      includes: "./template",
      layouts: "./template/_layouts",
      data: "./_cms/data",
    },
    passthroughFileCopy: true,
    templateFormats: [ 'md', 'njk'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'liquid',
  };
};