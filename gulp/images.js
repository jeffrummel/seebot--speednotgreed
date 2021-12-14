const project = require('./_project.js')
const gulp = require('gulp')
const responsive = require('gulp-responsive')
var $ = require('gulp-load-plugins')();

gulp.task('preLoad', function () {
  return gulp.src( 'src/_cms/img/uploads/*.{jpg,jpeg,png}')
    .pipe($.responsive({
      '*.jpg': [{
        width: 20,
        format: 'jpg'
      }],
      '*.jpeg': [{
        width: 20,
        format: 'jpeg'
      }],
      '*.png': [{
        width: 20,
        format: 'png'
      }]
    }, {
      quality: 40,
      progressive: true,
      withoutEnlargement: true,
      skipOnEnlargement: false, // that option copy original file with/without renaming
      errorOnEnlargement: false,
      withMetadata: false,
      errorOnUnusedConfig: false,
      errorOnUnusedImage: false,
    }))
    .pipe(gulp.dest(project.dest + '/pre/img/uploads'));  
});
gulp.task('mImages', function () {
  return gulp.src( 'src/_cms/img/uploads/*.{jpg,jpeg,png}')
    .pipe($.responsive({
      '*.jpg': [{
        width: 420,
        format: 'jpg'
      }],
      '*.jpeg': [{
        width: 420,
        format: 'jpeg'
      }],
      '*.png': [{
        width: 420,
        format: 'png'
      }]
    }, {
      quality: 40,
      progressive: true,
      withoutEnlargement: true,
      skipOnEnlargement: false, // that option copy original file with/without renaming
      errorOnEnlargement: false,
      withMetadata: false,
      errorOnUnusedConfig: false,
      errorOnUnusedImage: false,
    }))
    .pipe(gulp.dest(project.dest + '/m/img/uploads'));  
});
gulp.task('tImages', function () {
  return gulp.src( 'src/_cms/img/uploads/*.{jpg,jpeg,png}')
    .pipe($.responsive({
      '*.jpg': [{
        width: 780,
        format: 'jpg'
      }],
      '*.jpeg': [{
        width: 780,
        format: 'jpeg'
      }],
      '*.png': [{
        width: 780,
        format: 'png'
      }]
    }, {
      quality: 80,
      progressive: true,
      withoutEnlargement: true,
      skipOnEnlargement: false, // that option copy original file with/without renaming
      errorOnEnlargement: false,
      withMetadata: false,
      errorOnUnusedConfig: false,
      errorOnUnusedImage: false,
    }))
    .pipe(gulp.dest(project.dest + '/t/img/uploads'));  
});
gulp.task('dImages', function () {
  return gulp.src( 'src/_cms/img/uploads/*.{jpg,jpeg,png}')
    .pipe($.responsive({
      '*.jpg': [{
        width: 2880,
        format: 'jpg'
      }],
      '*.jpeg': [{
        width: 2880,
        format: 'jpeg'
      }],
      '*.png': [{
        width: 2880,
        format: 'png'
      }]
    }, {
      quality: 40,
      progressive: true,
      withoutEnlargement: true,
      skipOnEnlargement: false, // that option copy original file with/without renaming
      errorOnEnlargement: false,
      withMetadata: false,
      errorOnUnusedConfig: false,
      errorOnUnusedImage: false,
    }))
    .pipe(gulp.dest(project.dest + '/d/img/uploads'));  
});

gulp.task('images', gulp.parallel(
  'preLoad',
  'mImages',
  'tImages',
  'dImages',
))
// Desktop Images Use Passthrough copy