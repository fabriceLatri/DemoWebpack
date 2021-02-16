const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === 'dev';

let config = {
  entry: './assets/js/app.js',
  
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  
  watch: dev,

  devtool: dev ? 'cheap-module-eval-source-map' : 'source-map',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    
  ]
}

if (!dev) config.plugins.push(new UglifyJSPlugin({
  sourceMap: true
}));

module.exports = config;