import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteInfo: '',
    language: '',
    classInfo: ''
  },
  mutations: {
    setSite (state, data) {
      state.siteInfo = data
    },
    setLanguage (state, data) {
      state.language = data
    },
    setSiteClass (state, data) {
      state.classInfo = data
    }
  },
  actions: {

  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
