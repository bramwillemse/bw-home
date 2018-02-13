/** 
 * TEMPLATES
 * Generated with Hugo
 */

// required modules
import gulp from 'gulp';
import { spawn } from 'child_process';
import hugoBin from 'hugo-bin';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = 'development') {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;
  console.log(environment)

  return spawn(hugoBin, args, {stdio: 'inherit'}).on('close', (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify('Hugo build failed :(');
      cb('Hugo build failed');
    }
  });
}