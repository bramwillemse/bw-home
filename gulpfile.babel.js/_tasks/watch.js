/** 
 * WATCH
 * [1] Hugo files
 * [2] CSS
 * [3] Javascript
 * [4] Images
 */
import gulp from 'gulp'
import browserSync from 'browser-sync'

const reload = browserSync.reload

gulp.task('watch', function() {
    gulp.watch([ // [1]
        './site/**/*.{html,md}',
        '!.site/**/*.xml'
    ]).on('change', gulp.series('hugo', reload)),
    gulp.watch('./src/css/**/*.css').on('change', gulp.series('styles', reload)), // [2]
    gulp.watch('./src/js/**/*.js').on('change', gulp.series('scripts', reload)), // [3]
    gulp.watch('./src/img/**/*.{png,gif,jpg,svg}').on('change', gulp.series('images', reload)) // [4]
})
