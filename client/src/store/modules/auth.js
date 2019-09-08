import axios from 'axios';
import router from '../../routes'

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: ''
}

const getters = {
  isLoggedIn: state => !!state.token, // returns true or false
  authState: state => state.status,
  user: state => state.user
}

const actions = {
  // Login action
  async login( { commit }, user) {
    commit('auth_request');
    let res = await axios.post('http://localhost:3000/api/v1/users/login', user);
    if (res.data.status === 'success') {
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem('jwt', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log(user);
      commit('auth_success', token, user);
    }
    return res;
  }
}

const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, token, user) {
    state.token = token
    state.user = user
    state.status = 'success'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}