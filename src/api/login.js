/**
 * @name: 登录api配置
 * @param {type} 
 * @Author: luoyong
 */

import { post } from './axios'

export const apiRegister = p => post('api/users/register', p)
export const apiLogin = p => post('api/users/adminLogin', p)