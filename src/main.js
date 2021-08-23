// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import {
  Message
} from 'element-ui'
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/reset.css'
import './styles/publicStyle.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

axios.interceptors.request.use(
  function (config) {
    console.log(config);
    let companyId = (JSON.parse(localStorage.getItem('lyUserInfo')) || {}).companyId
    config.data && config.data.search && (config.data.search.companyId = companyId)
    config.data && (config.data.companyId = companyId)
    config.params && (config.params.companyId = companyId)
    // 在发送请求之前做些什么
    config.headers['Auth-Token'] = localStorage.getItem('lyToken') || ''
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)

  })

// 给axios配置响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 通过响应拦截器，直接返回 res.data
    if (response.data.resCode == 401) {
      localStorage.removeItem('lyToken')
      window.location.reload()
      Message({
        message: "token已失效请重新登录",
        type: "error",
        duration: 800,
      });
    }
    if (response.data.resCode != '0000') {
      Message({
        message: response.data.resDesc,
        type: "error",
        duration: 800,
      });
    }
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    if (error.toString().indexOf('401') != -1) {
      localStorage.removeItem('lyToken')
      Message({
        message:'token已失效请重新登录',
        type: "error",
        duration: 800,
      });
      router.push('./')
      return false
    }
    // 对响应错误做点什么
    Message({
      message:'服务器异常请稍后重试',
      type: "error",
      duration: 800,
    });
    // return Promise.reject(error.data.error.message);
    return Promise.reject(error)

  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
