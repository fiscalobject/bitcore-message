'use strict';

var gulp = require('gulp');
var ufocoreTasks = require('ufocore-build');

ufocoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
