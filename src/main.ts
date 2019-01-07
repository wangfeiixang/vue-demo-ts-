import Vue from "vue";
// import { Vue } from "vue-property-decorator";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

// Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
