
module.exports = {
  map: { inline: true },
  plugins: [
    require('autoprefixer')({
      grid: true
    }),
    require('postcss-import')({
      path: 'themes/bw-home/assets/css'
    }),
    require('postcss-reporter')({
      clearMessages: true,
      throwError: false
    }),
    require('postcss-custom-media'),
    require('stylelint')
  ]
}