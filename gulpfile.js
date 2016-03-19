var gulp = require('gulp');
var debug = require('gulp-debug');
var bower = require('main-bower-files');
var wiredep = require('gulp-wiredep');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('clean', function() {
  del('dist');
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("dist/**/*").on('change', browserSync.reload);
});

gulp.task('build:html', function() {
  gulp.src('./src/*.html')
      .pipe(debug())
      .pipe(wiredep({ignorePath: '/src/'}))
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
});

gulp.task('build:css', function() {
  gulp.src('./src/css/**/*.css')
      .pipe(concat('all.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
});

gulp.task('watch', ['default'], function() {
  gulp.watch('./src/index.html', ['build:html']);
  gulp.watch('./src/css/**/*.css', ['build:css']);
});

gulp.task('default', ['clean', 'build:html', 'build:css'], function() {
  gulp.src('./src/js/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
});
