// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Router from 'vue-router'

import echarts  from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api';//导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.config.productionTip = false

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//处理两次点击同一链接的报错
router.beforeEach((to,from,next) => {
  // const token = localStorage.getItem('token');
  const token = localStorage.getItem("token")
  console.log(token)
  if (to.path == '/login'){//如果跳到登陆页面
    if(token !== 'null' && token != null){
      next('/home/clientAnalyse')//有token就跳转到首页
    }
    next();//否则跳回登陆页
  }else {
    if (token != 'null' && token != null){
      next()//如果有token就正常跳转
    }else {
      next('/login')//否则跳回登陆页
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: "title",
  computed: {
    title() {
      return store.state.title
    }
  }
})
