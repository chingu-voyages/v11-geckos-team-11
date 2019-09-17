import axios from 'axios';
import toast from '../../helpers/toast';

const state = {
  profile: null,
  profiles: null,
  loading: false

}

const getters = {
  getProfile: state => state.profile,
}

const actions = {
  async getCurrentUserProfile( { commit }) {
    commit('set_loading', true)
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/profile/me`);
      commit('set_profile', res.data)
      commit('set_loading', false)
      return res
    } catch (error) {
      commit('set_profile', {})
      toast.error(error.response.data.message);
    }
  }
}

const mutations = {
  set_profile(state, profile) {
    state.profile = profile
  },
  set_loading(state, loading) {
    state.loading = loading
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}