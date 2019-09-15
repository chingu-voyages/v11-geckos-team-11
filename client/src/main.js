import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import toast from './helpers/toast';
const router = new VueRouter({
  routes,
  mode: 'history'
});

import Vuex from 'vuex';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

// Setting up default vue's http module to use axios
Vue.prototype.$http = axios;

// Check if there is a token in local storage
const token = localStorage.getItem('jwt');

// If there is a token, append default axios authorization headers
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

// Axios interceptor
axios.interceptors.response.use(
  function(response) {
    toast.success(response.data.message)
    console.log(response);
    return response
  },
  function(error) {
    if(error) {
      toast.error(error.response.data.message);
    }
    return error
  }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
