let project = require('./_project.js')
let gulp = require('gulp');
let del = require('del');

gulp.task('clean', function () {
  return del([
    './temp',
    // here we use a globbing pattern to match everything inside the `mobile` folder
    project.dest,
    // we don't want to clean this file though so we negate the pattern
    // '!dist/mobile/deploy.json'
  ]);
});

// gulp.task('default', gulp.series('clean:mobile'));
// var gulp    = require('gulp')
// var clean   = require('gulp-clean')

// gulp.task('clean', function () {
//   // return gulp.src(project.dest, {read: false})
//   return gulp.src('./temp', {read: false})
//   .pipe(clean())
// })
