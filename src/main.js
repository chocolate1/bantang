import Vue from 'vue'
import App from './App'
import { Upload } from 'element-ui'
import router from './router'
import store from './store'
import axios from  'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Vuex)
Vue.use(Upload)
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
