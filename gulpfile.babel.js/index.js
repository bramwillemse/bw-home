'use strict'

/** 
 * MAIN GULPFILE.JS
 * [1] Include all tasks
 * [2] Set paths
 * [3] Set build task
 * [4] Set default task
 */
import config from '../gulp-config.js'
import requireDir from 'require-dir'
import gulp from 'gulp'
requireDir('./_tasks', { recurse: true }) // [1]
import buildSite from './_tasks/hugo'

// Build/production tasks
gulp.task('build', gulp.parallel('styles', 'scripts', 'images', (cb) => buildSite(cb, [], 'production')))
gulp.task('build-preview', gulp.parallel('styles', 'scripts', 'images', (cb) => buildSite(cb, config.hugoArgsPreview, 'production')))

gulp.task('default', gulp.series( // [4]
    'clean',
    'build',
    gulp.parallel(
        'serve',
        'watch'
    )
))