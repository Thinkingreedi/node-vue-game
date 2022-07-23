import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// iconfont
import './assets/iconfont/iconfont.css';
// sass
import './assets/scss/style.scss'
// 路由
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Card from "./components/Card.vue";
Vue.component('m-card', Card)

import ListCard from "./components/ListCard.vue";
Vue.component('m-list-card', ListCard)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
