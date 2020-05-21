/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 09:50:47
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-21 11:39:18
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },  
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
