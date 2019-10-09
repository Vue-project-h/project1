import Vue from 'vue'
import Router from 'vue-router'
import Tapbar from './components/Tapbar.vue'
import Logo from './views/Logo.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: {
        'head': Logo,
        'main': Main,
        'footer':Tapbar
      }
    },
  ]
})
