
'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    /**
     * Load in our build configuration file.
     */
    //var userConfig = require('./build.conf.js');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
         * run express web server
         */

        connect: {
            options: {
                base: './src/'
            },
            webserver: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            },
            devserver: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            },
            testserver: {
                options: {
                    port: 9999
                }
            },
            coverage: {
                options: {
                    base: 'coverage/',
                    port: 5555,
                    keepalive: true
                }
            }
        },

        /**
         * 
         * Karma configuration
         */

        karma: {
            unit: {
                configFile: './test/karma.conf.js',
                autoWatch: false,
                singleRun: true
            }
        }

    });

    //single run tests
    grunt.registerTask('test:unit', ['karma:unit']);

    //defaults
    grunt.registerTask('default', ['dev']);

    //development
    grunt.registerTask('dev', ['connect:devserver']);
};