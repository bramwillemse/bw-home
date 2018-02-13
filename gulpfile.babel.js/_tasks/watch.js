/** 
 * TASK: WATCH
 */
import gulp from 'gulp'
import browserSync from 'browser-sync'
const reload = browserSync.reload

gulp.task('watch', gulp.parallel(
    watchTemplates,
    watchStyles,
    watchScripts,
    watchImages
));

function watchTemplates() {
    // Watch templates
    gulp.watch([
        './site/**/*.{html,md}',
        '!.site/**/*.xml',
        '!./site/public/**/*', 
        '!./site/static/**/*'
        ]).on('change', gulp.series('hugo', reload))
}

function watchStyles() {
    // Watch Sass
    gulp.watch('./src/css/**/*.css').on('change', gulp.series('styles', reload))
}

function watchScripts() {
    // Watch scripts
    gulp.watch('./src/js/**/*.js').on('change', gulp.series('scripts', reload))
}

function watchImages(){
   // Watch image files
    gulp.watch('./src/img/**/*.{png,gif,jpg,svg}').on('change', gulp.series('images', reload))
}