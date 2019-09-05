import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
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
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
