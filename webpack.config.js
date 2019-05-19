const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public',
    filename: process.env.IDEA_TYPE + '.js',
    publicPath: ''
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      { test: /\.(ya?ml)$/, loader: "js-yaml-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IDEA_TYPE: JSON.stringify(process.env.IDEA_TYPE),
    })
  ],
}
