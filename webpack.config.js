const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash:5].js'
  },
  devServer: {
    contentBase: path.join(__dirname, './src'),
    host: 'localhost',
    port: '8080',
    compress: true,
    open: true,
    hot: true
  },
  optimization: {
    minimize: true,
    sideEffects: true,
    /**
     * natural 按照使用顺序的数字id
     * named 可读的id，方便调试
     * size 数字ID专注于最小的初始下载大小
     * total-size 数字ID专注于最小的总下载大小
     */
    // chunkIds: 'named',
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  // 持久缓存
  cache: {
    // 设置为文件系统
    type: 'filesystem',
    buildDependencies: {
      // 将您的配置添加为buildDependency，以使配置更改时 
      config: [__filename]
      // 如果构建还有其他依赖项，可以在此处添加它们
      //注意，从您的配置中引用的webpack，加载程序和所有模块都会自动添加
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'hello world',
      filename: 'index.html',
      template: './src/page/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}