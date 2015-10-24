'use strict';

export default {

  browserPort: 4000,
  UIPort: 4001,

  sourceDir: './app/',
  buildDir: './build/',

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/js/**/*.js',
    dest: 'build/js'
  },

  images: {
    src: 'app/assets/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src: ['app/assets/fonts/**/*'],
    dest: 'build/fonts'
  },

  views: {
    index: 'app/index.html',
    src: 'app/views/**/*.html',
    dest: 'app/js'
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/',
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

  init() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
