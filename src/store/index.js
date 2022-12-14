import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: null,
    source: null,
    money: null,
    person : null,
    about: null,
    time: null,
    code: null
  },

  getters: {
    getData (state) {
      return state
    }
  },

  mutations: {
    updateType (state, type) {
      state.type = type
    },
    resetType (state) {
      state.type = null
    },
    updateData (state, data) {
      state.source = data.source
      state.money = data.money
      state.person = data.person
      state.about = !!data.about ? data.about : 'Chuyen khoan'
      state.time = data.time
      state.code = data.code
    },
    resetData (state) {
      state.source = null
      state.money = null
      state.person = null
      state.about = null
      state.time = null
      state.code = null
    }
  },

  actions: {
  },
  
  modules: {
  }
})
