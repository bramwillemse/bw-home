'use strict';

// Images

// Required modules
import config from '../../gulp-config.js';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('images', () =>
    gulp.src(config.paths.img.src)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(config.paths.img.dest))
);