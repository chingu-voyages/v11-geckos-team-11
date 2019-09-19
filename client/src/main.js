import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment'

import Vuex from 'vuex';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.prototype.moment = moment
Vue.config.productionTip = false

Vue.use(Vuex)

// Setting up default vue's http module to use axios
Vue.prototype.$http = axios;

// Check if there is a token in local storage
const token = localStorage.getItem('jwt');

// If there is a token, append default axios authorization headers
if(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
