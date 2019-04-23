import Vue from "vue";
import Vuex from "vuex";
import orderModule from './orderModule.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    orderModule
  }
});
