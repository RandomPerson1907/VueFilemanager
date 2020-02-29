import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Components from "./file-manager.common";

Vue.config.productionTip = false;

new Vue({
  Components,
  store,
  render: h => h(App)
}).$mount("#app");
