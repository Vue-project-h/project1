import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterhouse: [],
    gongyuxiangqing: null,
    userinfo: {},
    tokens: null,
  },
  mutations: {
    addHouse(state, a) {
      state.filterhouse = a;
    },
    ininfo(state, info) {
      state.userinfo = info;
    },
    layin(state, info) {
      state.tokens = info;
    }
  },
  actions: {

  }
})
