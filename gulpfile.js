var gulp = require('gulp');
var debug = require('gulp-debug');
var bower = require('main-bower-files');
var wiredep = require('gulp-wiredep');

gulp.task('default', function() {
  gulp.src('./*.html')
      .pipe(wiredep())
      .pipe(gulp.dest('./dist'));

});
