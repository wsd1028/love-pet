import Vue from "vue";
import Vuex from "vuex";
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import userSysModule from "./userSysModule.js";
import shopManagerModule from "./shopManagerModule.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ProModule,
    serviceModule,
    userSysModule,
    shopManagerModule
  }
});
