/** 
 * TEMPLATES
 * Generated with Hugo
 */

// required modules
import config from '../../gulp-config'
import gulp from 'gulp'
import { spawn } from 'child_process'
import hugoBin from 'hugo-bin'
import gutil from 'gulp-util'
import BrowserSync from 'browser-sync'

const browserSync = BrowserSync.create()

// Development tasks
gulp.task('hugo', (cb) => buildSite(cb))
gulp.task('hugo-preview', (cb) => buildSite(cb, config.hugoArgsPreview))

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = 'development') {
    const args = options ? config.hugoArgsDefault.concat(options) : config.hugoArgsDefault

    process.env.NODE_ENV = environment
    console.log(args)
    console.log('environment: ' + environment)

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