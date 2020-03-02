import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    additionalInfoSidebarVisible: false
  },
  mutations: {
    setAdditionalInfoSidebarVisible: (state, status) => state.additionalInfoSidebarVisible = status,
    setLoading: (state, status) => state.loading = status
  },
  getters: {
    getAdditionalInfoSidebarVisible: state => state.additionalInfoSidebarVisible,
    isLoading: state => state.loading,
  },
  actions: {
    showAdditionalInfoSidebar({commit}) {
      commit('setAdditionalInfoSidebarVisible', true)
    },
    hideAdditionalInfoSidebar({commit}) {
      commit('setAdditionalInfoSidebarVisible', false)
    },
    startLoading({commit}) {
      commit('setLoading', true);
    },
    stopLoading({commit}) {
      commit('setLoading', false);
    },
  },
});
