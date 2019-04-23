import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./usersModule.js";
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    usersModule,
    ProModule,
    serviceModule
  }
});
