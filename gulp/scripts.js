const project = require('./_project.js')
const gulp    = require('gulp')
const uglify  = require('gulp-uglify-es').default
const concat  = require('gulp-concat')
const plumber = require('gulp-plumber');
const babel   = require('gulp-babel')
const pump    = require('pump')

gulp.task('scripts', function(done) {
  gulp.src([
      './node_modules/vanilla-lazyload/dist/lazyload.js',
      project.src + '/js/main.js'
    ])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: [
        ['@babel/env', {
          modules: false
        }]
      ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(project.dest + '/js'))
  done()
})