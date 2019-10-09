import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/font_1449119_558kk0d3v5j/iconfont.css'
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
