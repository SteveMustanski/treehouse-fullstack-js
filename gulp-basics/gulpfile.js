'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concatScripts', (done) => {
  // lists files in terh order they will appear
  gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main.js'])
    //pipes the above to the gulp-concat which ouputs app.js
    .pipe(concat('app.js'))
    // pipes the app.js file to the dest which specifies the dest folder
    .pipe(gulp.dest('js'));
  done();
});

gulp.task('default', gulp.series('concatScripts'));