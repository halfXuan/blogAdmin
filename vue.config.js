/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-25 17:36:33
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-25 17:37:47
 */ 
module.exports ={
    devServer:{
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}