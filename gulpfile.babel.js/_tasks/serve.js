// // Start a server using Browsersync

// // Required modules
// import config from '../../gulp-config.js'
// import gulp from 'gulp'
// import browserSync from 'browser-sync'
// import watch from 'gulp-watch'

// // Development server with browsersync
// gulp.task('serve', gulp.parallel('hugo', 'styles', 'scripts', 'images'), () => {
//     browserSync.init({
//         server: {
//             baseDir: './site/public'
//         }
//     });
//     watch(config.paths.js.src, () => { gulp.start(['js']) });
//     watch(config.paths.css.src, () => { gulp.start(['css']) });
//     watch(config.paths.img.src, () => { gulp.start(['images']) });
//     watch(config.paths.html.src, () => { gulp.start(['hugo']) });
// });