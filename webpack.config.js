var path = require('path');

module.exports = {
  context: path.resolve('src/client'),
  entry: ['./index.jsx'],
  output: {
    path: path.resolve('build/client/'),
    publicPath: '/scripts',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'src/public'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
