// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/reset.scss'
import '../static/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible'
import data from './mock/mock'
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(data)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
