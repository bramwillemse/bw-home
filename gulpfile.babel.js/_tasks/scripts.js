/**
 * SCRIPTS
 * Convert ES6 ode in all js files in src/js folder and copy to
 * build folder as bundle.js
 */
import config from '../../config.js'
import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import sourcemaps from 'gulp-sourcemaps'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import eslint from 'gulp-eslint'
import browserSync from 'browser-sync'

/**
 * SCRIPTS: LINT SCRIPTS
 */
const scriptsLint = () => {
    return gulp.src(config.paths.js.src)
        .pipe(eslint())
}

const scriptsCompile = () => {
    return browserify({
            entries: config.paths.js.srcMain,
            debug: true
        })
        .transform('babelify')
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
        .pipe(browserSync.reload({stream:true}))
}

gulp.task('scripts', gulp.series(scriptsLint, scriptsCompile))
