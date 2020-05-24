/*
 * @Author: 471826078@qq.com
 * @Date: 2020-05-21 09:50:47
 * @LastEditors: 471826078@qq.com
 * @LastEditTime: 2020-05-21 18:09:39
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
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
        path: '/Home/Board',
        name: 'Board',
        component: () => import(/* webpackChunkName: "about" */ '../views/board.vue')
      },
      {
        path: '/Home/User',
        name: 'User',
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
      },
      {
        path: '/Home/Comment',
        name: 'Comment',
        component: () => import(/* webpackChunkName: "about" */ '../views/Comment.vue')
      },
      {
        path: '/Home/AddAcrticle',
        name: 'AddAcrticle',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/add.vue')
      },
      {
        path: '/Home/AcrticleList',
        name: 'AddAcrticle',
        component: () => import(/* webpackChunkName: "about" */ '../views/article/List.vue')
      },
    ]
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
