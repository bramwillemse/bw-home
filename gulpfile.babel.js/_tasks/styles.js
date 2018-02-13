'use strict';

/** 
 * TASK: STYLE
 * Compile stylesheets
 */
import config from '../../gulp-config.js';

// Required modules
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import atImport from 'postcss-import';
import customMedia from "postcss-custom-media";
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';
import sourcemaps from 'gulp-sourcemaps';
import clean from 'gulp-clean-css';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

// PostCSS plugins
var plugins = [
        atImport(),
        stylelint(),
        cssnext({browsers: ['last 2 versions']}),   
        customMedia(),     
        reporter({ // Pretty reporting config
            clearMessages: true,
            throwError: false
        })
    ];


// Task: Sass Compilation, compression & injection
gulp.task('styles', function() {
	return gulp.src(config.paths.css.srcMain)
        .pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(postcss(
            plugins
        ))
		.pipe(gulp.dest(config.paths.css.dest))
		.pipe(clean({ sourceMap: true }))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.css.dest))
		.pipe(browserSync.stream());
});