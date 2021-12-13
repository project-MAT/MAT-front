const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',

    proxy({
      target: 'http://10.120.74.53:9000',

      changeOrigin: true,
    })
  )
}
