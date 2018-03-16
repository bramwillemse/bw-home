/** 
 * SERVE
 * Serve the site locally
 */
import config from '../../config'
import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('serve', () => {
    browserSync.init({
        host: config.urls.localhost,
        proxy: config.urls.localhost
    });
});