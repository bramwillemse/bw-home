/**
 * CLEAN
 * Clean up all generated files
 */
import gulp from 'gulp'
import clean from 'gulp-rimraf'

gulp.task('clean', gulp.parallel(
	cleanPublic
))


/**
 * CLEAN: IMAGES
 * Cleans compiled / optimised images
 */
function cleanPublic() {
  return gulp.src('./public/',
    {
      read: false,
      allowEmpty: true
    })
    .pipe(clean());
}
