const state = {
  buttonText: 'Join Discussion'
}

const mutations = {
  changeButtonText(state, buttonText) {
    state.buttonText = buttonText;
  }
}

const getters = {
  buttonText: (state) => state.buttonText
}

export default {
  state,
  getters,
  mutations
}
