'use strict'

/** 
 * MAIN GULPFILE.JS
 * [1] Include all tasks
 * [2] Set paths
 * [3] Set build task
 * [4] Set default task
 */
import config from '../gulp-config.js'
import requireDir from 'require-dir'
requireDir('./_tasks', { recurse: true }) // [1]
import gulp from 'gulp'
import browserSync from 'browser-sync'
import watch from 'gulp-watch'
import hugoBin from "hugo-bin"

import {spawn} from "child_process"


// Hugo arguments
const hugoArgsDefault = ['-d', './public', '-s', 'site', '-v']
const hugoArgsPreview = ['--buildDrafts', '--buildFuture']


/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = 'development') {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault

  process.env.NODE_ENV = environment
  console.log('environment: ' + environment)

  return spawn(hugoBin, args, {stdio: 'inherit'}).on('close', (code) => {
    if (code === 0) {
      browserSync.reload()
      cb()
    } else {
      browserSync.notify('Hugo build failed :(')
      cb('Hugo build failed')
    }
  })
}

// Development tasks
gulp.task('hugo', (cb) => buildSite(cb))
gulp.task('hugo-preview', (cb) => buildSite(cb, hugoArgsPreview))

// Build/production tasks
gulp.task('build', gulp.parallel('styles', 'scripts', 'images'), (cb) => buildSite(cb, [], 'production'))
gulp.task('build-preview', gulp.parallel('styles', 'scripts', 'images'), (cb) => buildSite(cb, hugoArgsPreview, 'production'))

gulp.task('default', gulp.series( // [4]
    'clean',
    'build',
    gulp.parallel(
        'serve',
        'watch'
    )
))