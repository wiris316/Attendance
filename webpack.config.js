const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        resolve: {
          extensions: ['.js', '.jsx']
        }
      }, 
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'dist'),

      publicPath: '/',
    },
    hot: true,
    // historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/**': 'http://localhost:3000'
    },
  }
}















/**
 * proxy is required in order to make api calls to
 * express server while using hot-reload webpack server
 * routes api fetch requests from localhost:8080/api/* (webpack dev server)
 * to localhost:3000/api/* (where our Express server is running)
 */