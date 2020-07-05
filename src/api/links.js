/**
 * @name: 引入axios
 * @param {type} 
 * @Author: luoyong
 */
import { post, get } from './axios'
export const apiAddLinks = p => post('api/links/add', p)
export const apiQueryLinks = p => get('api/links/query', p)
export const apiDeleteLinks = p => post('api/links/dele', p)