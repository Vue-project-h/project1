import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterhouse: []
  },
  mutations: {
    addHouse(state, a) {
      state.filterhouse = a;
    }
  },
  actions: {

  }
})
