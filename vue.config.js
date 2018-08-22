module.exports = {
  baseUrl: "/",
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.js" // 使用vue-router 再引入vue的路径就会改变，这时候就需要配置一下，配置后要build才会生效
        // excel: path.resolve(__dirname, "../src/excel")
      }
    }
  },

  devServer: {
    proxy: {
      "/posts": {
        target: "http://jsonplaceholder.typicode.com",
        ws: true,
        changeOrigin: true
      }
    } // 配置多个代理
  }
};
