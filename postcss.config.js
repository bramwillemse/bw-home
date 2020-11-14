
module.exports = {
  plugins: {
    'autoprefixer': {
      grid: true
    },
    'postcss-custom-media': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    'postcss-reporter': {
      clearMessages: true,
      throwError: true
    },
    'stylelint': {}
  },
}
