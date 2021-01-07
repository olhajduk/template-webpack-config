const PostCSSpresentEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    new PostCSSpresentEnv({
      browsers: 'last 2 versions'
    })
  ]
}
