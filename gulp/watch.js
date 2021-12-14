var project = require('./_project.js')
var gulp    = require('gulp')


gulp.task('watch', function () {
  gulp.watch(project.src + '/js/**/*', gulp.parallel('scripts')),
  gulp.watch(project.src + '/css/**/*', gulp.parallel('styles')),
  gulp.watch('./src/_cms/**/*', gulp.parallel('generate'))
  gulp.watch('./src/site/*.njk', gulp.parallel('generate'))
  gulp.watch('./src/template/**/*', gulp.parallel('generate'))
  gulp.watch('./temp/*', gulp.parallel('generate'))
})