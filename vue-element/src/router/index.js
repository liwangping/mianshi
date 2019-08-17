import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login.vue'
import Home from '@/view/Home.vue'
import ClientAnalyse from '@/components/detalis/ClientAnalyse.vue'
import MovieTime from '@/components/detalis/MovieTime.vue'
import SaleTransformation from '@/components/detalis/SaleTransformation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'clientAnalyse',
          component: ClientAnalyse
        },
        {
          path: 'movieTime',
          component: MovieTime
        },
        {
          path: 'saleTransformation',
          component: SaleTransformation
        }
      ]
    }
  ]
})
