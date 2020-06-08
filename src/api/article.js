/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-29 10:23:16
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-29 12:18:47
 */ 
import {get, post} from '@/api/axios'

 export const apiAddArticle = p =>post('api/articles/addArticle', p)
 export const apiDeleteArticle = p =>post('api/articles/deleteArticle', p)
 export const apiModifyArticle = p =>post('api/articles/updateArticle', p)
 export const apiQueryArticleById = p =>post('api/articles/queryArticleById',p)
 export const apiQueryArticle = p =>get('api/articles/queryAll', p)