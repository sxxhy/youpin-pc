import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteInfo: '',
    language: '',
    classInfo: '',
    cartCount: 0,
    cart: [],
    address: [],
    orderInfo: ''
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
    },
    setCartCount (state, data) {
      let count = 0
      for (let item of data) {
        count += item.count
      }
      state.cartCount = count
    },
    setCart (state, data) {
      state.cart.push(data)
    },
    setCartSave (state, cart) { // 修改保存
      state.cart = cart
    },
    deleteCartItem (state, data) {
      state.cart = data
    },
    setAddress (state, data) {
      state.address = data
    }
  },
  actions: {

  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
