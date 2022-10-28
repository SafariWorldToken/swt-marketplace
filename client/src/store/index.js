import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user: {},
      address: null,
      provider: null,
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAccountAddress (state, address) {
      state.address = address
    },
    setProvider (state, provider) {
      state.provider = provider
    },
  },
  actions: {
  },
  modules: {
  }
})
