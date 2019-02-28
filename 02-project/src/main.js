import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
// import "trials/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-vue/dist/bootstrap-vue.css"
// import { Layout } from 'bootstrap-vue/es/components'
// Vue.use(Layout)

import {messages} from './lang/lang.js'

Vue.use(BootstrapVue)

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

export const app = new Vue({
    el: '#app',
    i18n,
    template: '<App/>',
    components: {App}
    // render: h => h(App)
})


