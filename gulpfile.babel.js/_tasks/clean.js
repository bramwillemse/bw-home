/** 
 * CLEAN
 * Clean up all generated files
 */
import gulp from 'gulp'
import clean from 'gulp-rimraf'

gulp.task('clean', gulp.parallel(
	cleanImages,
    cleanStyles,
	cleanScripts, 
    cleanTemplates
))


/**
 * CLEAN: IMAGES
 * Cleans compiled / optimised images
 */
function cleanImages() {
    return gulp.src('./dist/img', 
        { 
            read: false, 
            allowEmpty: true 
        })
        .pipe(clean());
}

/**
 * CLEAN: STYLES
 * Cleans compiled CSS
 */
function cleanStyles() {
	return gulp.src([
        './site/static/css',
        './dist/css'    
    ], { 
        read: false,
        allowEmpty: true 
    })
	.pipe(clean());
}

/**
 * CLEAN: SCRIPTS
 * Cleans compiled Javascript
 */
function cleanScripts() {
	return gulp.src([
        './site/static/js', 
        './dist/js'
        ], { 
            read: false,
            allowEmpty: true
        })
		.pipe(clean());
}

/**
 * CLEAN: TEMPLATES
 * Cleans generated Hugo files
 */
function cleanTemplates() {
    return gulp.src('./dist/**/*.{html,xml}', { read: false })
        .pipe(clean());
}
