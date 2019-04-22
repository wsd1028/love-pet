import Vue from "vue";
import Vuex from "vuex";
import supplierModule from './supplierModule.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    supplierModule
  }
});