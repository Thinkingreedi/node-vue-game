import Vue from 'vue'
import App from './App.vue'
// 引入插件
import './plugins/element.js'
// 引入路由
import router from './router'
// 引入封装好的样式
import './style.css'
// 默认关闭生产警告提示
Vue.config.productionTip = false
// 引入http模块
import http from "./http";
Vue.prototype.$http = http
// 全局混入
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
