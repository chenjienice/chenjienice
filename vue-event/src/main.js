import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// 引入样式表
import '@/assets/global.less'

// 配置axios根目录,挂在到Vue的prototype
axios.defaults.baseURL = 'http://www.liulongbin.top:3008'
Vue.prototype.$http = axios

// 注册ElementUI
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
