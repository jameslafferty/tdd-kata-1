(function (M, undefined) {
	'use strict';
	function exports (grunt) {
		grunt.loadNpmTasks('grunt-contrib-jasmine');
		grunt.initConfig({
			jasmine : {
				tddKata1 : {
					src : 'index.js',
					options : {
						specs : 'specs/*.js'
					}
				}
			},
			pkg : grunt.file.readJSON('package.json')
		});
		grunt.registerTask('default', ['jasmine']);
	}
	M.exports = exports;
}(module));