const state = {
  buttonText: 'Start Discussion'
}

const mutations = {
  change(state, buttonText) {
    state.buttonText = 'buttonText';
  }
}

const getters = {
  buttonText: state => state.buttonText
}


export default {
  state,
  getters,
  actions,
  mutations
}
