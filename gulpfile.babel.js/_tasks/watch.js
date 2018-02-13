// 'use strict';

// /** 
//  * TASK: WATCH
//  */
// const gulp = require('gulp')
// const browserSync = require('browser-sync')
// const reload = browserSync.reload

// gulp.task('watch', gulp.parallel(
//     // watchTemplates,
//     watchStyles,
//     watchScripts,
//     watchImages
// ));

// // function watchTemplates() {
// //     // Watch templates
// //     gulp.watch('./src/templates/**/*.{html,md}').on('change', gulp.series('templates', reload))
// // }

// function watchStyles() {
//     // Watch Sass
//     gulp.watch('./src/css/**/*.css').on('change', gulp.series('style'))
// }

// function watchScripts() {
//     // Watch scripts
//     gulp.watch('./src/js/**/*.js').on('change', gulp.series('scripts', reload))
// }

// function watchImages(){
//    // Watch image files
//     gulp.watch('./src/img/**/*.{png,gif,jpg,svg}').on('change', gulp.series('images'))
// }