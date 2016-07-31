'use strict';

import config      from '../config';
import browserSync from 'browser-sync';
import gulp        from 'gulp';

gulp.task('browserSync', function() {

  browserSync.init({
    port: config.browserPort,
    open: config.openbrowser,
    proxy: 'http://localhost:8080/',
  	ui: {
    	port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});
