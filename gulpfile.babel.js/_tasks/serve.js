/**
 * SERVE
 * Serve the site locally
 */
import config from '../config'
import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('serve', () => {
    browserSync.init({
        server: config.paths.dist,
        watch: true
    });
});