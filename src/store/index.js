import Vue from "vue";
import Vuex from "vuex";
import serviceModule from './serviceModule.js'

Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    serviceModule
  }
});
