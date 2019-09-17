import axios from 'axios';
import router from '../../router';
import toast from '../../helpers/toast';

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  errors: {}
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

    try {
      const res = await axios.post('http://localhost:3000/api/v1/users/login', user);
      if (res.data.status === 'success') {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem('jwt', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('auth_success', { token, user }  );
        toast.success(res.data.message);
        router.push({ path: '/' })
      }
      return res;
    } catch (error) {
      commit('set_errors', error.response.data)
      toast.error(error.response.data.message);
    }
  },

  // Register action
  async register({ commit }, newUser) {
    commit('auth_request')
    try {
      let res = await axios.post('http://localhost:3000/api/v1/users/signup', newUser);

      if (res.data.status === 'success') {
        const newUser = res.data.user;
        const token = res.data.token;
        localStorage.setItem('jwt', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('auth_success', { token, newUser }  );
        router.push('/profile')
        toast.success(res.data.message)
      }
      return res;
    } catch (error) {
      commit('set_errors', error.response.data)
      toast.error(error.response.data.message);
    }
  },

  // Logout
  async logout({
    commit
  }) {
    let res = await axios.get('http://localhost:3000/api/v1/users/logout');
    if (res.data.status === 'success') {
      commit('logout')
      await localStorage.removeItem('jwt')
      delete axios.defaults.headers.common['Authorization'];
      toast.success('Sucessfully logged out...')
      return
    }
  }
}

const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, { token, user }) {
    state.token = token
    state.user = user
    state.status = 'success'
  },
  set_errors(state, errors) {
    state.errors = errors;
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