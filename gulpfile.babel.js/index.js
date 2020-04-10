import config from './config.js'
import requireDir from 'require-dir'
import gulp from 'gulp'

/**
 * MAIN GULPFILE.JS
 * [1.1] Include all tasks
 * [1.2] And one specific function for Hugo build
 *
 * [2] Set build tasks:
 * [2.1] Production build
 * [2.2] Preview build - also builds drafts
 *
 * [3] Set default gulp task
 */

// [1]
requireDir('./_tasks', { recurse: true }) // [1.1]
import buildSite from './_tasks/hugo' // [1.2]

// [2]
gulp.task('build', // [2.1]
    gulp.parallel(
        'styles',
        'scripts',
        'images',
        (cb) => buildSite(cb, [], 'production')
    )
)

gulp.task('build-preview', // [2.1]
    gulp.parallel(
        'styles',
        'scripts',
        'images',
        (cb) => buildSite(cb, config.hugoArgsPreview, 'development')
    )
)

// [3]
gulp.task('default', gulp.series(
    'clean',
    'build-preview',
    gulp.parallel(
        'serve',
        'watch'
    )
))