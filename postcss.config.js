module.exports = {
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: [
    require('postcss-import')({
      path: ['themes/bw-monochrome/src/css']
    }),
    require('autoprefixer')({
      grid: true
    }),
    require('postcss-custom-media')(),
    require('stylelint')({
      fix: true
    }),
    require('postcss-reporter')({
      clearReportedMessages: true,
      throwError: true,
      noPlugin: true
    })
  ]
}
