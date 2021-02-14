const path = require('path');

module.exports = {
  entry: './assets/js/app.js',
  
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  
  watch: true,

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}