/** 
 * STYLES
 * CSS Compilation, compression & injection (with BrowserSync)
 * 
 * [1] Define PostCSS Plugins
 * [1.1] Pretty logs
 * [2] Track sourcemaps
 * [3] Inject CSS with Brwosersync instead of page reload
 */
import config from '../../config'
import gulp from 'gulp'
import postcss from 'gulp-postcss'
import cssnext from 'postcss-cssnext'
import atImport from 'postcss-import'
import customMedia from "postcss-custom-media"
import reporter from 'postcss-reporter'
import stylelint from 'stylelint'
import sourcemaps from 'gulp-sourcemaps'
import clean from 'gulp-clean-css'
import rename from 'gulp-rename'
import browserSync from 'browser-sync'

var plugins = [ // [1]
        atImport(),
        stylelint(),
        cssnext({ browsers: ['last 2 versions'] }),   
        customMedia(),     
        reporter({ // [1.1]
            clearMessages: true,
            throwError: false
        })
    ]

gulp.task('styles', function() {
	return gulp.src(config.paths.css.srcMain)
        .pipe(sourcemaps.init({ loadMaps: true })) // [2]
		.pipe(postcss(
            plugins
        ))
		.pipe(gulp.dest(config.paths.css.dest))
		.pipe(clean({ sourceMap: true })) // #TODO what does this do again? 
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.css.dest))
		.pipe(browserSync.stream()) // [3]
})