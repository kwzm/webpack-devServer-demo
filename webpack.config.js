const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    publicPath: '/',
    contentBase: 'public',
    inline: true,
    hot: true,
    hotOnly: false,
    allowedHosts: [
      'host.com'
    ],
    clientLogLevel: 'info',
    compress: false,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/views/landing.html' },
        { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/views/404.html' }
      ]
    },
    https: false,
    lazy: false,
    noInfo: true,
    open: false,
    openPage: '/different/page',
    overlay: {
      warnings: false,
      errors: true
    },
    public: 'localhost',
    quiet: false,
    useLocalIp: false,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}