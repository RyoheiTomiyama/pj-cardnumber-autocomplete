const path = require('path')

function resolve(p) {
  return path.join(__dirname, p)
}

module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [resolve('./styles/common/media.css')],
    },
    'postcss-preset-env': {
      stage: 2,
      browsers: 'last 2 versions',
      features: {
        'nesting-rules': true,
        'media-query-ranges': true,
        'custom-media-queries': true,
      },
    },
    autoprefixer: {},
  },
}
