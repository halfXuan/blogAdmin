/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 09:54:50
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-21 10:27:23
 */
import axios from 'axios'
import Qs from 'qs'
import Vue from 'vue'
import router from '../router'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
//请求拦截
axios.interceptors.request.use(
    config => {
        const token = window.localStorage.getItem('blogToken')
        token && (config.headers.Authorization = token);
        return config
    },
    error => {
        return Promise.error(error)
    }
)
//响应拦截
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
                    break;
                case 403:
                    // Toast({
                    //     message: '登录过期，请重新登录',
                    //     duration: 1000,
                    //     forbidClick: true
                    // });
                    // 清除token
                    localStorage.removeItem('blogToken');
                    // store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                case 404:
                    // Toast({
                    //     message: '网络请求不存在',
                    //     duration: 1500,
                    //     forbidClick: true
                    // })
                    break;
                case 500:
                    // Toast({
                    //     message: '服务异常，请联系管理员',
                    //     duration: 1500,
                    //     forbidClick: true
                    // });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                // Toast({
                //     message: error.response.data.message,
                //     duration: 1500,
                //     forbidClick: true
                // });
            }
            return Promise.reject(error.response);

        }
    }
)

/**
 * @name: 封装get请求
 * @param { String } url
 * @param { Object } params 
 * @Author: 471826078@qq.com
 */

export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

/** 
 * @name: 封装post请求
 * @param {String} url
 * @param { Object } params 
 * @Author: 471826078@qq.com
 */

export const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, Qs.stringify(params, { allowDots: true })).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
