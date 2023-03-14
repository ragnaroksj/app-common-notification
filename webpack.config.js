const path = require('path');

module.exports = {
  mode: 'development', // production
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  //loaders
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  }
  //plugins
}