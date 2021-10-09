import Vue from 'vue'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLocalStorage from 'vue-localstorage' 
Vue.use(VueLocalStorage)

/*
import HomePage from './components/homePage'
import index from './components/index'
*/


Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.use(VueCookies);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
