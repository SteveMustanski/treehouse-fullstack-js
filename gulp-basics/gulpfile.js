'use strict';

const gulp = require('gulp');

gulp.task('hello', (done) => {
  console.log('Hello from gulp task!');
  done();
});

gulp.task('hello2', (done) => {
  console.log('Hello from gulp task2!');
  done();
});


gulp.task('default', gulp.series('hello', 'hello2'));