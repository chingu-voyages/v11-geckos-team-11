import axios from 'axios';
import toast from '../../helpers/toast';

const state = {
  profile: null,
  profiles: null,
  loading: false

}

const getters = {
  getProfile: state => state.profile
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
  },

  async deleteExperience( context, payload) {
    try {
      await axios.delete(`http://localhost:3000/api/v1/profile/experience/${payload}`);
      context.dispatch('getCurrentUserProfile');
      toast.success('Experience deleted')
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  async deleteEducation( context, payload) {
    try {
      await axios.delete(`http://localhost:3000/api/v1/profile/education/${payload}`);
      context.dispatch('getCurrentUserProfile');
      toast.success('Education deleted')
    } catch (error) {
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