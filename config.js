/**
* GULP CONFIG
* Config file for gulpfile.js
*/
const config = {
  hugoArgsDefault: [
    '-d',
    '../dist',
    '-s',
    'site',
    '-v'
  ],
  hugoArgsPreview: [
    '--buildDrafts',
    '--buildFuture'
  ],
  paths: {
    dist: "./dist",
    css: {
      src: './src/css/**/*.css',
      srcMain: './src/css/main.css',
      dest: './dist/css'
    },
    js: {
      src: './src/js/**/*.js',
      srcMain: './src/js/main.js',
      dest: './dist/js'
    },
    img: {
      src: './src/img/**/*',
      dest: './dist/img'
    },
    html: {
      src: 'site/**/*'
    }
  }
}

export default config;
