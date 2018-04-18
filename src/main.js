import Vue from 'vue'
import App from './App'
import 'common/stylus/index.styl'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
import fastclick from 'fastclick'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
Vue.prototype.$ajax = axios
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
