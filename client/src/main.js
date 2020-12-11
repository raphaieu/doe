import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/axios'

import VueTheMask from 'vue-the-mask'
import x5GMaps from 'x5-gmaps'
const GOOGLE_KEY = '';
Vue.use(x5GMaps, { key: GOOGLE_KEY, libraries: ['places'] });

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  axios,
  VueTheMask
}).$mount('#app')
