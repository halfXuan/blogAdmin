/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-25 17:36:33
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-06-08 16:22:43
 */
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.heyidangao.com:8089/api/', //对应自己的接口
                // target: 'http://localhost:3000/api/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}