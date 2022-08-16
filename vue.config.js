const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = {
  // 跨域解决
  devServer:{
    proxy:{
      '^/api':{
        target:'http://152.136.185.210:5000',
        pathRewrite:{
          '^/api':''
        },
        changeOrigin:true
      }
    }
  },
  // 第一种配置方法
  // outputDir:'/build',
  // 第二种配置方法 这种方式需要const path = require('path)
  // configureWebpack:(config)=>{
  //   config.resolve.alias = {
  //     '@':path.resolve(__dirname,'src'),
  //     components:'@/components'
  //   }
  // },
  // 第三种配置方法 这种方式需要const path = require('path)
  // 如果开启了eslint,在.eslintrc.js里面的rules加入'@typescript-eslint/no-var-requires':'off'
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',path.resolve(__dirname,'src'))
      .set('components','@/components')
  },
  lintOnSave:false
}