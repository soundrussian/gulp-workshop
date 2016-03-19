var gulp = require('gulp');
var debug = require('gulp-debug');

gulp.task('default', function() {
  gulp.src('./bower_components/jquery/dist/jquery.js')
      .pipe(debug())
      .pipe(gulp.dest('./lib/'));
});
