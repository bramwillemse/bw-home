/**
* GULP CONFIG
* Config file for gulpfile.js
*/
const config = {
  hugoArgsDefault: [
    '-d',
    './public',
    '-s',
    './',
    '-v'
  ],
  hugoArgsPreview: [
    '--buildDrafts',
    '--buildFuture'
  ],
  paths: {
    dest: "./public",
    css: {
      src: './themes/bw-home/assets/css/**/*.css',
      srcMain: './themes/bw-home/assets/css/main.css',
      dest: './public/assets/css'
    },
    js: {
      src: './themes/bw-home/assets/js/**/*.js',
      srcMain: './themes/bw-home/assets/js/main.js',
      dest: './public/assets/js'
    },
    img: {
      src: './themes/bw-home/static/images/**/*',
      dest: './public/images'
    },
    html: {
      src: '**/*'
    }
  }
}

export default config;
