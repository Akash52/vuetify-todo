import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Wake up', active: true },
      { id: 2, title: 'Go to work', active: false },
      { id: 3, title: 'Go to bed', active: false }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
