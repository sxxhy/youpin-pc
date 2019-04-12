import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
Vue.config.productionTip = false
const imgBaseURL = 'http://cdn.seezt.cc/uploadimages/'
Vue.prototype.imgBaseURL = imgBaseURL
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
