import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Reg from '@/views/Reg/Reg.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/Login', component: Login },
  { path: '/Reg', component: Reg }
]

const router = new VueRouter({
  routes
})

export default router
