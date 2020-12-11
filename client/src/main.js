import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import VueTheMask from 'vue-the-mask'
import x5GMaps from 'x5-gmaps'
const GOOGLE_KEY = 'AIzaSyB-3Xkzl4Q1fjmurZ_eD4YJfAi_54jtAbo';
Vue.use(x5GMaps, { key: GOOGLE_KEY, libraries: ['places'] });

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  // x5GMaps : { key: GOOGLE_KEY, libraries: ['places'] },
  VueTheMask
}).$mount('#app')
