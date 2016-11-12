import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import FineArt from './FineArt.vue'
import About from './About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/fine-art', component: FineArt },
    { path: '/about', component: About },
    { path: '*', redirect: '/fine-art' }
  ]
})

new Vue({
  router,
  ...App
}).$mount('#app')
