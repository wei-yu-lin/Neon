module.exports = {
  devServer: {
    //以上的ip和埠號是我們本機的;下面為需要跨域的
    proxy: {    //配置跨域
      '/auth': {
        target: 'http://localhost:3000/auth',   //這裡後台的地址模擬的，應該填寫真實的後台api
        ws: true,
        changOrigin: true,  //允許跨域
        pathRewrite: {
          '^/auth': ''
        }
      },
      'get': {
        target: 'http://localhost:5531/get',   //這裡後台的地址模擬的，應該填寫真實的後台api
        ws: true,
        changOrigin: true,  //允許跨域
        pathRewrite: {
          '^/get': ''
        }
      }
    },
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080
  }
};