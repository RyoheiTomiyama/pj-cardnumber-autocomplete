const path = require('path')

function resolve(p) {
  return path.join(__dirname, p)
}

module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 2,
      browsers: 'last 2 versions',
      features: {
        'nesting-rules': true,
        // 'color-mod-function': true,
        'media-query-ranges': true,
        'custom-media-queries': {
          importFrom: [resolve('./styles/common/media.css')],
        },
      },
    },
    autoprefixer: {},
  },
}
