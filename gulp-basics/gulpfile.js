'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('concatScripts', (done) => {
  // lists files in terh order they will appear
  gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main.js'])
    .pipe(maps.init())
    //pipes the above to the gulp-concat which ouputs app.js
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
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
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./'))
  .pipe(gulp.dest('css'));
  done();
});

gulp.task('watchFiles', () => {
  gulp.watch(['scss/**/*.scss'], gulp.series('compileSass'));
  gulp.watch(['js/main.js'], gulp.series('concatScripts'));
});

gulp.task('clean', (done) => {
  del(['dist', 'css/application.css*', 'js/app.*.js*']);
  done();
})

gulp.task('build', gulp.series('concatScripts', 'minifyScripts', 'compileSass'), () => {
  gulp.src(["css/application.css", "js/app.min.js", 'index.html', 'img/**', 'fonts/**'], {base: './'})
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', gulp.series('watchFiles'));

gulp.task('default', gulp.series('clean','build'));