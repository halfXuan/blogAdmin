/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-27 16:51:51
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-27 16:55:18
 */ 
let daterc = 670000000;
let lately2 = (daterc/10000).toFixed(3);//对小数点后3位四舍五入
console.log(lately2.lastIndexOf('.'));

console.log(lately2.substring(0,lately2.lastIndexOf('.')+3));
 