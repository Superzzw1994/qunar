import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/pages/Home/home.vue'
import city from '../components/pages/city/City.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/city',
      component: city
    }
  ]
})
