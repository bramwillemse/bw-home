'use strict';

// Clean up all generated files

// Required modules
var gulp = require('gulp'),
	clean = require('gulp-rimraf')

// Main task
// Clean up all generated files
gulp.task('clean', gulp.parallel(
	cleanStyle,
	cleanScripts, 
    cleanStyleguide,
    cleanHtml
))

	// Sub-task: Clean up generated stylesheets
	function cleanStyle() {
		return gulp.src('./dist/css/*', { read: false })
			.pipe(clean());
	}

	// Sub-task: Clean up generated scripts
	function cleanScripts() {
		return gulp.src('./dist/js/*', { read: false })
			.pipe(clean());
	}

	// Sub-task: Clean up generated styleguide
	function cleanStyleguide() {
		return gulp.src('./dist/styleguide/*', { read: false })
			.pipe(clean());
	}

    // Sub-task: Clean up generated styleguide
    function cleanHtml() {
        return gulp.src('./dist/html/*', { read: false })
            .pipe(clean());
    }
