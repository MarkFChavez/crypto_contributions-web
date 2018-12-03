import Vue from "vue";
import Vuex from "vuex";
import service from "@/services/api";

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
    },
    GET_CONTRIBUTORS (state, contributors) {
      state.contributors = contributors
    }
  },
  actions: {
    startLoading ({ commit }) {
      commit('START_LOADING')
    },
    stopLoading ({ commit }) {
      commit('STOP_LOADING')
    },
    getContributors({ commit }, obj) {
      return service.getContributors(obj.owner, obj.repo)
        .then(response => {
          let items = response
            .data
            .reverse()
            .slice(0, 10)

          commit('GET_CONTRIBUTORS', items)
        })
    }
  }
});
