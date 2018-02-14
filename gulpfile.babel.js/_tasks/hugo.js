/** 
 * HUGO
 * Generate HTML with Hugo
 * [1] Set Hugo tasks
 * [1.1] Standard build
 * [2.2] Preview build - also shows drafts
 * [2] A build function that accepts arguments
 */
import config from '../../gulp-config'
import gulp from 'gulp'
import { spawn } from 'child_process'
import hugoBin from 'hugo-bin'
import gutil from 'gulp-util'
import BrowserSync from 'browser-sync'

const browserSync = BrowserSync.create()

// [1]
gulp.task('hugo', (cb) => buildSite(cb)) // [1.1]
gulp.task('hugo-preview', (cb) => buildSite(cb, config.hugoArgsPreview)) // [1.2]

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = 'development') {
    const args = options ? config.hugoArgsDefault.concat(options) : config.hugoArgsDefault

    process.env.NODE_ENV = environment

    return spawn(hugoBin, args, { stdio: 'inherit' }).on('close', (code) => {
        if (code === 0) {
            browserSync.reload()
            cb()
        } else {
            browserSync.notify('Hugo build failed :(')
            cb('Hugo build failed')
        }
    })
}

export default buildSite