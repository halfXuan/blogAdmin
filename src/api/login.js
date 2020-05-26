/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-25 17:44:02
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-26 14:57:35
 */
import { post } from './axios'

export const apiRegister = p=>post('api/users/register',p)
export const apiLogin = p =>post('api/users/adminLogin',p)