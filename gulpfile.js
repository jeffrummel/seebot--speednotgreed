var gulp  = require('gulp')
var shell = require('gulp-shell')

//  Get _all_ the gulp tasks here
require('require-dir')('./gulp')

// Run Eleventy
gulp.task('generate', shell.task('eleventy'))

// Assets
gulp.task('assets', gulp.parallel(
  'styles',
  'scripts',
))

//  Build
gulp.task('build:local', gulp.series(
  'clean',
  'scripts',
  'styles',
  'images',
  'generate'
))
gulp.task('build:production', gulp.series(
  'styles', 
  'scripts',
  'generate',
  'images',
))