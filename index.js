const webpackConfig = require('./webpack.config')
const webpack = require('webpack')

const compiler = webpack(webpackConfig).run()
console.log(compiler)
