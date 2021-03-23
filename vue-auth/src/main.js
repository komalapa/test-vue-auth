import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import Axios from 'axios'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.prototype.$http = Axios;
Vue.prototype.$store = store;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
