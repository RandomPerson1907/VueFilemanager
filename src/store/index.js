import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    additionalInfoSidebarVisible: false
  },
  mutations: {
    setAdditionalInfoSidebarVisible: (state, status) => state.additionalInfoSidebarVisible = status,
  },
  getters: {
    getAdditionalInfoSidebarVisible: state => state.additionalInfoSidebarVisible,
  },
  actions: {
    showAdditionalInfoSidebar({commit}) {
      commit('setAdditionalInfoSidebarVisible', true)
    },
    hideAdditionalInfoSidebar({commit}) {
      commit('setAdditionalInfoSidebarVisible', false)
    },
  },
});
