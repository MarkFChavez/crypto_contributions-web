import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    contributors: [],
  },
  mutations: {
    START_LOADING (state) {
      state.loading = true
    },
    STOP_LOADING (state) {
      state.loading = false
    }
  },
  actions: {
    startLoading ({ commit }) {
      commit('START_LOADING')
    },
    stopLoading ({ commit }) {
      commit('STOP_LOADING')
    }
  }
});
