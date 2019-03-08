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
import Projects from './Projects.vue'
import Home from './Home.vue'
import Team from './Team.vue'
import ProjectView from './ProjectView.vue'
import ProjectForm from './ProjectForm.vue'
import Contact from './Contact.vue'
import Success from './Success.vue'
import Categories from './Categories.vue'
import CategoryProducts from './CategoryProducts.vue'
import ProductView from './ProductView.vue'


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/categories/:id/products/:id',
      name: 'ProductView',
      component: ProductView
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/categories/:id/products',
      name: 'CategoryProducts',
      component: CategoryProducts
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/home/success',
      name: 'success',
      component: Success,
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/projects/:id',
      name: 'ProjectView',
      component: ProjectView
    },
    {
      path: '/projects/:id/edit',
      name: 'ProjectForm',
      component: ProjectForm
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/add',
      name: 'ProjectForm',
      component: ProjectForm
    },
  ]
})

// import "trials/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/minty.css';
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
