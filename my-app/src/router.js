import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RoomDetail from '@/views/roomDetial.vue'
import RoomDetailInfo from '@/views/roomDetialInfo.vue'
import Tapbar from './components/Tapbar.vue'
import Logo from './views/Logo.vue'
import Main from './views/Main.vue'
import Chooseroom from './views/Chooseroom.vue'
import Filterhouse from './views/Filterhouse.vue'
import AAA from './views/AAA.vue'
import Login from './views/Login.vue'
import UserCenter from './views/userCenter.vue'
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
      path: '/roomdetail/:roomNum',

      components: {
        'main': RoomDetail
      }
    },
    {
      path: '/roomdetailinfo/:roomInfoStr',

      components: {
        'main': RoomDetailInfo
      }
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
    },
    {
      path: '/login',
      components: {
        // 'head': Logo,
        'main': Login,
      }
    },
    {
      path: '/usercenter/:user',
      components: {
        // 'head': Logo,
        'main': UserCenter,
        'footer': Tapbar
      }
    }
  ]
})
