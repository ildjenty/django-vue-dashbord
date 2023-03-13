export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    login_id: '',
    first_name: '',
    last_name: '',
    en_first_ame: '',
    en_last_name: '',
  },
  getters: {
    greetingMessage(state) {
      return `ようこそ${state.last_name}${state.first_name}さん`;
    },
  },
};
