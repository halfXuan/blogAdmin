/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-29 10:23:16
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-29 12:18:47
 */ 
import {get, post} from '@/api/axios'

 export const apiAddLabel = p =>post('api/labels/addLabel', p)
 export const apiDeleteLabel = p =>post('api/labels/deleteLabel', p)
 export const apiModifyLabel = p =>post('api/labels/updateLabel', p)
 export const apiQueryLabel = p =>get('api/labels/query', p)
