'use strict';

import 'babel-polyfill';

import chokidar from 'chokidar';
import del from 'del';
import gulp from 'gulp';
import gulpBabel from 'gulp-babel';

gulp.task('watch', [ 'compile' ], watch);
function watch() {
    chokidar.watch('src/**/*.js', { ignoreInitial: true }).on('all', function (event, file) {
        compile();
    });
}

gulp.task('compile', [], compile);
function compile() {
    return gulp.src('src/**/*.js')
        .pipe(gulpBabel())
        .pipe(gulp.dest('lib'));
}

gulp.task('clean', [], clean);
function clean() {
    return del([
        'lib'
    ]);
}