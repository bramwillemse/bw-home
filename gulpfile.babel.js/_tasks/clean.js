'use strict';

// Clean up all generated files

// Required modules
var gulp = require('gulp'),
	clean = require('gulp-rimraf')

// Main task
// Clean up all generated files
gulp.task('clean', gulp.parallel(
	cleanStyles,
	cleanScripts, 
    cleanTemplates
))

	// Sub-task: Clean up generated stylesheets
	function cleanStyles() {
		return gulp.src([
            './site/static/css',
            './site/public/css'    
        ], { 
            read: false,
            allowEmpty: true 
        })
		.pipe(clean());
	}

	// Sub-task: Clean up generated scripts
	function cleanScripts() {
		return gulp.src([
            './site/static/js', 
            './site/public/js'
            ], { 
                read: false,
                allowEmpty: true
            })
			.pipe(clean());
	}

    // Sub-task: Clean up generated html
    function cleanTemplates() {
        return gulp.src('./site/public/**/*.{html,xml}', { read: false })
            .pipe(clean());
    }
