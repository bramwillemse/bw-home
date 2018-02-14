/** 
 * SERVE
 * Serve the site locally
 */
import config from '../../gulp-config.js'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import watch from 'gulp-watch'

gulp.task('serve', () => {
    browserSync.init({
        host: config.urls.localhost,
        proxy: config.urls.localhost
    });
});