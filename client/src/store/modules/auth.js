import axios from 'axios';
import router from '../../routes'

const state ={
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
  // Register action
  async register( { commit }, user)
}

const mutations = {


}

export default {
  state,
  getters,
  actions,
  mutations
}