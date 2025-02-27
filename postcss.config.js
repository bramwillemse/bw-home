module.exports = {
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {
      path: ['themes/bw-monochrome/src/css']
    },
    'autoprefixer': {
      grid: true
    },
    'postcss-custom-media': {},
    'postcss-preset-env': {},
    'stylelint': {
      fix: true
    },
    'postcss-reporter': {
      clearMessages: true,
      throwError: false, // Changed from true to see actual errors
      noPlugin: false,   // Show which plugin causes the error
      formatter: (input) => {
        if (input.messages.length === 0) {
          return '';
        }
        return '\nCSS Issues:\n' + input.messages.map(m =>
          `${m.plugin}: ${m.text} on line ${m.line}`
        ).join('\n');
      }
    }
  },
  map: true // Enable source maps for PostCSS
};