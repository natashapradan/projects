import Vue from 'vue'

import BootstrapVue from "bootstrap-vue"
import Router from 'vue-router'
import babelPolyfill from 'babel-polyfill'

Vue.use(Router)
import App from './App.vue'
import Projects from './Projects.vue'
import Home from './Home.vue'
import Team from './Team.vue'


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
    ]
})

// import "trials/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/hero.css';
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
    mounted() {
        axios
            .get('backend/db.json')
            .then(response => (this.info = response))
    }
})
