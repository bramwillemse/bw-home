// Start a server using Browsersync

// Required modules
import config from '../../gulp-config.js'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import watch from 'gulp-watch'

// Development server with browsersync
// Task: Static Server
gulp.task('serve', () => {
    browserSync.init({
        host: 'https://hugo.dev',
        proxy: 'https://hugo.dev'
    });
});