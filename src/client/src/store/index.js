import { createStore } from 'vuex'
import { get, post } from '@/driver/api'

export default createStore({
  state: {
    message: '',
  },
  getters: {
    message: (state) => state.message,
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload
    },
  },
  actions: {
    async fetchMessage({ commit }) {
      const res = await get('/api/message')
      commit('setMessage', res.data.message)
    },
    async sendDateTime({ commit }) {
      const now = new Date()
      const res = await post('/api/message', { params: { datetime: now } })
      commit('setMessage', res.data.message)
    },
  },
})
