var project = require('./_project.js')
var gulp    = require('gulp')
var sass    = require('gulp-sass')(require('node-sass'));
var postcss = require('gulp-postcss');
var rename = require('gulp-rename')
var pump    = require('pump')

//  Plugins
var precss  = require('precss');
var csso    = require('postcss-csso');
var pixelstorem = require('postcss-pixels-to-rem');

var postProcessor = [
  pixelstorem({
    base: 16
  }),
  precss(),
  csso({forceMediaMerge: true})
];


gulp.task('styles', function(done) {
  pump([
    gulp.src(project.src + '/css/critical.scss'),
    sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError),
    gulp.dest('./temp/')
  ], done()
  ),
  pump([
      gulp.src(project.src + '/css/main.scss'),
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError),
      gulp.dest(project.dest + '/css/')
    ], done()
  ),
  pump([
      gulp.src(project.src + '/css/fonts.scss'),
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError),
      gulp.dest(project.dest + '/css/')
    ], done()
  )
})
gulp.task('styles:production', function() {  
  return gulp.src(project.dest + '/css/*.css')
    .pipe(postcss(postProcessor))
    .pipe(gulp.dest(project.dest + '/css'))
})
gulp.task('styles--hed', function() {
  return gulp.src(project.src + '/css/header.scss')
    .pipe(sass({
      outputStyle: 'uncompressed'
    }).on('error', sass.logError))
    .pipe(rename('header--02.css'))
    .pipe(gulp.dest(project.dest + '/css/headers/'))
})
gulp.task('styles--marq', function() {
  return gulp.src(project.src + '/css/marquee.scss')
    .pipe(sass({
      outputStyle: 'uncompressed'
    }).on('error', sass.logError))
    .pipe(rename('marquee--09.css'))
    .pipe(gulp.dest(project.dest + '/css/marquees/'))
})

