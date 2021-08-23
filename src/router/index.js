import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: resolve => require(['../pages/Login'], resolve)
    },
    {
      path: '/home',
      name: 'main',
      component: resolve => require(['../pages/Main.vue'], resolve),
      redirect: "/home",
      children: [{
        path: '/home',
        name: 'home',
        component: resolve => require(['../pages/Home'], resolve),
        meta: {
          bread: ["首页"],
        }
      }, {
        path: '/table',
        name: 'myTable',
        component: resolve => require(['../pages/Table'], resolve),
        meta: {
          bread: ["基础组件", "表格"],
        }
      }, {
        path: '/form',
        name: 'myForm',
        component: resolve => require(['../pages/Form'], resolve),
        meta: {
          bread: ["基础组件", "表单"],
        }
      }, ]
    },
    {
      path: '*',
      name: '404',
      component: resolve => require(['../pages/404.vue'], resolve)
    }
  ]
})
