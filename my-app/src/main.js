import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets//iconfont/iconfont.css'
import '../node_modules/animate.css/animate.css'
import 'lib-flexible'
import { Tabbar, TabbarItem } from "vant";
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
