/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-26 15:12:08
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-26 15:29:17
 */
import { post } from './axios'
/**
 * @name: 
 * @param {type} 
 * @Author: 471826078@qq.com
 */
export const apiQueryUser = p => post('api/users/query', p)
export const apiDeleteUser = p => post('api/users/deleteUser', p)
