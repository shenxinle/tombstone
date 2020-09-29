module.exports = {
  configureWebpack: {
    devServer: {
      disableHostCheck: true,
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
};