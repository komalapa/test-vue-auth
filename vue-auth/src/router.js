import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './components/home.vue'
import Login from './components/login.vue'
import Secure from './components/secure.vue'
import Registration from './components/registration.vue'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/registration',
        name: 'registration',
        component: Registration
      },
      {
        path: '/guard', //Защищенные страницы
        name: 'guard',
        component: Secure,
        meta: { 
          requiresAuth: true
        }
      },
    ]
  })

  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })


  export default router