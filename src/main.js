import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/iview.js'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

Vue.use(Toast, {
  type: 'center',
  duration: 1500,
  wordWrap: false,
  width: 'auto',
  color: '#f00'
})

Vue.config.productionTip = false
const imgBaseURL = 'http://cdn.seezt.cc/uploadimages/'
Vue.prototype.imgBaseURL = imgBaseURL
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
