'use strict';

import 'babel-polyfill';

import del from 'del';
import gulp from 'gulp';
import gulpBabel from 'gulp-babel';
import vinylPaths from 'vinyl-paths';

gulp.task('compile', () => {
    return gulp.src('src/**/*.js')
        .pipe(gulpBabel())
        .pipe(gulp.dest('lib'));
});

gulp.task('clean', [], () => {
    var stream = gulp.src([
        'lib'
    ], { read: false });

    return stream
        .pipe(vinylPaths(del));
});