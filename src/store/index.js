import Vue from "vue";
import Vuex from "vuex";
import studentModule from './studentModule.js'
import serviceModule from './serviceModule.js'

Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    studentModule,
    serviceModule
  }
});
