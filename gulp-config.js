const config = {
    paths: {
        css: {
            src: './src/css/**/*.css',
            srcMain: './src/css/main.css',
            dest: './site/static/css'
        },
        js: {
            src: './src/js/**/*.js',
            srcMain: './src/js/main.js',
            dest: './site/static/js'
        },
        img: {
            src: './src/img/**/*',
            dest: './site/static/img'
        }, 
        html: {
            src: 'site/**/*'
        }
    }
}

export default config;