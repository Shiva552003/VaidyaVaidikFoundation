const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vvfwebsite/',
  devServer: {
    historyApiFallback: true
  }
})
