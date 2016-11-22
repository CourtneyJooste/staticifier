var gulp = require('gulp');
var hogan = require('gulp-hogan');

gulp.task('default', function(){
  gulp.src('template.hogan')
    .pipe(hogan({handle: 'gnumanth'}))
    .pipe(gulp.dest('dist'));
});