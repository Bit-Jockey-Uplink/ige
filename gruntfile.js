"use strict";

var util = require('util'),
	aliasify = require('aliasify'),
	stringify = require('stringify'),
	derequire = require('derequire');

module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		"jshint": {
			"core": {
				"files": {
					"src": [
						"engine/core/*.js"
					]
				}
			},
			"components": {
				"files": {
					"src": [
						"engine/components/**/*.js",
						"engine/ui/**/*.js"
					]
				}
			},
			options: {
				jshintrc: '.jshintrc'
			}
		},
		
		"browserify": {
			"all": {
				src: [
					"./engine/core/*.js",
					"./engine/assets/*.js",
					"./engine/extensions/*.js",
					"./engine/components/*.js",
					"./engine/components/audio/*.js",
					"./engine/components/cocoonjs/*.js",
					"./engine/components/editor/*.js",
					"./engine/components/stackTrace/*.js",
					"./engine/ui/*.js",
					"./index.js"
				],
				dest: "./ige.js",
				options: {
					verbose: true,
					debug: true,
					transform: [aliasify, stringify(['.html'])],
					plugin: [
						["browserify-derequire"]
					]
				}
			}
		}
	});
	
	grunt.registerTask("1: Build Source File", ["browserify"]);
	grunt.registerTask("default", ["1: Build Source File"]);
};