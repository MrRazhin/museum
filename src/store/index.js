import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      id: null,
      name: "",
      email: "",
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = { id: null, name: "", email: "" };
    },
  },
  actions: {
    login({ commit }, user) {
      // здесь может быть логика для аутентификации
      commit("setUser", user);
    },
    logout({ commit }) {
      commit("clearUser");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user.id !== null;
    },
    getUserName(state) {
      return state.user.name;
    },
  },
});
