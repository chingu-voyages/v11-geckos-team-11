import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import profile from './modules/profile';
import postPage from './modules/postPage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {auth, profile, postPage}
})
