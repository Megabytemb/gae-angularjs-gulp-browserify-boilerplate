'use strict';

export default {

  browserPort: 3000,
  openbrowser: true,
  UIPort: 3001,
  testPort: 3002,

  sourceDir: './app/frontend_src/',
  buildDir: './app/static/',

  styles: {
    src: 'app/frontend_src/styles/**/*.scss',
    dest: 'app/static/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/frontend_src/js/**/*.js',
    dest: 'app/static/js',
    test: 'test/**/*.js',
    gulp: 'gulp/**/*.js'
  },

  images: {
    src: 'app/frontend_src/images/**/*',
    dest: 'app/static/images'
  },

  fonts: {
    src: ['app/frontend_src/fonts/**/*'],
    dest: 'app/static/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/frontend_src/index.html',
    src: 'app/frontend_src/views/**/*.html',
    dest: 'app/frontend_src/js'
  },

  gzip: {
    src: 'app/static/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'app/static/',
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
