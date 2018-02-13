'use strict';

/**
 * SCRIPTS 
 * Convert ES6 ode in all js files in src/js folder and copy to
 * build folder as bundle.js
 */

// Required modules
import config from '../../gulp-config.js';
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import rename from 'gulp-rename';
import browserify from 'browserify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import eslint from 'gulp-eslint';
import browserSync from 'browser-sync';

const reload = browserSync.reload;


gulp.task('scripts', gulp.parallel(lintScripts), function(){ 
    return browserify({
            entries: config.paths.js.srcMain, 
            debug: true 
        })
        .transform('babelify', { presets: ['env'] })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(rename({ // #NOTE untested
            suffix: '.min'
        })) 
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.js.dest))
        .pipe(reload({stream:true}))
});


// Sub-task Linting
function lintScripts() {
    return gulp.src(config.paths.js.src)
    .pipe(eslint());
};
