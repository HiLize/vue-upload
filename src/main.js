import Vue from "vue";
import "iview/dist/styles/iview.css";
import App from "./pages/UploadIndex.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
