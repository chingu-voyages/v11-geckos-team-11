import axios from 'axios';
import router from './../../routes'

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

    const config = {
      withCredentials: true
    }
    const res = await axios.post('http://localhost:3000/api/v1/users/login', user, { withCredentials: true});
    if (res.data.status === 'success') {
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem('jwt', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      commit('auth_success', { token, user }  );
    }
    return res;
  },

  // Register action
  async register({ commit }, newUser) {
    commit('auth_request')
    let res = await axios.post('http://localhost:3000/api/v1/users/signup', newUser, { withCredentials: true});

    if (res.data.status === 'success') {
      const newUser = res.data.user;
      const token = res.data.token;
      localStorage.setItem('jwt', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      commit('auth_success', { token, newUser }  );
    }
    return res;
  },

  // Logout
  async logout({
    commit
  }) {
    let res = await axios.get('http://localhost:3000/api/v1/users/logout', { withCredentials: true});
    if (res.data.status === 'success') {
      commit('logout')
      await localStorage.removeItem('jwt')
      delete axios.defaults.headers.common['Authorization'];
      router.push('/')
      return
    }
  }
}

const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, token, user) {
    state.token = token
    state.user
    state.status = 'success'
  },
  auth_error(state, errMsg) {
    state.status = 'fail',
    state.error = errMsg
  },
  logout(state) {
    state.status = ''
    state.token = ''
    state.user = {}
 },

}

export default {
  state,
  getters,
  actions,
  mutations
}