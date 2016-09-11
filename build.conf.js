/**
 * This file/module contains all configuration for the build process.
 */

'use strict';
 /*jshint camelcase: false */

module.exports = {

  bin_dir : 'bin',

  test_dir: 'test',
  

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/app/**/*.js', 'src/common/**/*.js' ],
    jsunit: [ 'src/app/**/*.spec.js','src/common/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    assets : ['src/assets/*'],

    html: [ 'src/index.html' ]
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      
      'src/vendor/jquery/dist/jquery.min.js',
      'src/vendor/angular/angular.min.js',
      'src/vendor/angular-route/angular-route.min.js',
      'src/vendor/angular-ui-router/release/angular-ui-router.min.js',
      'src/vendor/angular-resource/angular-resource.min.js',
      'src/vendor/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is a collection of additionnal HTML5 scripts.
   */
  scripts_files: {
    modernizr: [
      'src/scripts/modernizr-2.8.3.min.js'
    ],
    plugins : [
        'src/scripts/plugins.js'
    ]
  },

  vendor_files: {
    js: [
      'src/vendor/jquery/dist/jquery.min.js',
      'src/vendor/angular/angular.min.js',
      'src/vendor/angular-route/angular-route.min.js',
      'src/vendor/angular-ui-router/release/angular-ui-router.min.js',
      'src/vendor/angular-resource/angular-resource.min.js'
    ],
    css: [
    ],
    assets: [
    ]
  },

  
};