const path = require('path')
const webpack = require('webpack')

const node_modules = path.resolve(__dirname, '../node_modules')
const dir_src = path.resolve(__dirname, '../src')
const buildPath = path.resolve(__dirname, '../static')


module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(dir_src, 'main.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', 'less', 'css']
  },
  output: {
    path: buildPath,
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [{
      test: /src(\\|\/).+(\.jsx|\.js)?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['syntax-async-functions', 'transform-regenerator']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}