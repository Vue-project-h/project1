import Vue from 'vue'
import Router from 'vue-router'
import Tapbar from './components/Tapbar.vue'
import Logo from './views/Logo.vue'
import Main from './views/Main.vue'
import Chooseroom from './views/Chooseroom.vue'
import Filterhouse from './views/Filterhouse.vue'
import AAA from './views/AAA.vue'

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
        'footer': Tapbar
      },
    },
    {
      path: '/filtehouse',
      components: {
        'head': Logo,
        'main': Filterhouse,
      }
    },
    {
      path: '/chooseroom',
      components: {
        'head': Logo,
        'main': Chooseroom,
      }
    },
    {
      path: '/house-detail',
      components: {
        // 'head': Logo,
        'main': AAA,
      }
    }
  ]
})
