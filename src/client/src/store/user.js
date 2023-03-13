import { post } from '@/driver/api';

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    loginId: '',
    firstName: '',
    lastName: '',
    enFirstName: '',
    enLastName: '',
  },
  getters: {
    greetingMessage(state) {
      return `ようこそ${state.lastName}${state.firstName}さん`;
    },
  },
  mutations: {
    setUserState(
      state,
      {
        isAuthenticated,
        loginId,
        firstName,
        lastName,
        enFirstName,
        enLastName,
      },
    ) {
      state.isAuthenticated = isAuthenticated;
      state.loginId = loginId;
      state.firstName = firstName;
      state.lastName = lastName;
      state.enFirstName = enFirstName;
      state.enLastName = enLastName;
    },
  },
  actions: {
    async login({ commit }, payload) {
      return post('/api/login', payload).then((res) => {
        commit('setUserState', { ...payload, ...res.data });
      });
    },
  },
};
