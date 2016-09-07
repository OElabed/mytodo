module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        connect: {
			mytodo: {
				port: 3000,
				base: 'src'
			}
        }

    });

    grunt.registerTask('default', 'connect:mytodo');
};