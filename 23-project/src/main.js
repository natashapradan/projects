import Vue from 'vue'

import VeeValidate from 'vee-validate';
import BootstrapVue from "bootstrap-vue"
import Router from 'vue-router'
import babelPolyfill from 'babel-polyfill'

Vue.use(Router)
Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: 'veeFields'
});
import App from './App.vue'
import Home from './Home.vue'
import Europe from './Europe.vue'
import US from './US.vue'
import Ukraine from './Ukraine.vue'
import EuropeAccelerators from './EuropeAccelerators.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/europe',
      name: 'europe',
      component: Europe
    },
    {
      path: '/us',
      name: 'us',
      component: US
    },
    {
      path: '/ukraine',
      name: 'ukraine',
      component: Ukraine
    },
    {
      path: '/europe/:id',
      name: 'europeAccelerators',
      component: EuropeAccelerators
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ]
})

// import "trials/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/flatly.css';
// import "bootstrap-vue/dist/bootstrap-vue.css"
// import { Layout } from 'bootstrap-vue/es/components'
// Vue.use(Layout)

Vue.use(BootstrapVue)

// import VueI18n from 'vue-i18n'
//
// Vue.use(VueI18n)
// export const i18n = new VueI18n({
//     locale: 'en',
//     fallbackLocale: 'en',
// })

const axios = require('axios');

export const app = new Vue({
  el: '#app',
  // i18n,
  router,
  templates: '<App/>',
  // components: {App}
  render: h => h(App),
})
