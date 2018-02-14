/** 
 * MAIN GULPFILE.JS
 * [1] Include all tasks
 * [1.1] And one specific function for Hugo build
 * [2] Set build tasks:
 * [2.1] Production build
 * [2.2] Preview build - also builds drafts 
 * [3] Set default gulp task 
 */
import config from '../gulp-config.js'
import requireDir from 'require-dir'
import gulp from 'gulp'

requireDir('./_tasks', { recurse: true }) // [1]
import buildSite from './_tasks/hugo' // [1.1]

// [2]
gulp.task('build', gulp.parallel('styles', 'scripts', 'images', (cb) => buildSite(cb, [], 'production'))) // [2.1]
gulp.task('build-preview', gulp.parallel('styles', 'scripts', 'images', (cb) => buildSite(cb, config.hugoArgsPreview, 'production'))) // [2.1]

gulp.task('default', gulp.series( // [3]
    'clean',
    'build',
    gulp.parallel(
        'serve',
        'watch'
    )
))