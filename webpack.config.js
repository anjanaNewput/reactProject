const path = require('path');
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/,loaders: ["style", "css", "sass"]}
    ]
},
devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
 
}