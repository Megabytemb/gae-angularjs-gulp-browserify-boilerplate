'use strict';

import config from '../config';
import gulp   from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('eslint', () => {
  return gulp.src([config.scripts.src, '!app/frontend_src/js/templates.js', config.scripts.test, config.scripts.gulp])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
