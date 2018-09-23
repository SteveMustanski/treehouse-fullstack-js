'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

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

gulp.task('minifyScripts', (done) => {
  // gets the app.js file
  gulp.src('js/app.js')
  // minifys it
  .pipe(uglify())
  // renames the file
  .pipe(rename('app.min.js'))
  //puts it in js folder
  .pipe(gulp.dest('js'));
  done();
});

gulp.task('compileSass', (done) => {
  gulp.src('scss/application.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'));
  done();
})

gulp.task('default', gulp.series('concatScripts', 'minifyScripts'));