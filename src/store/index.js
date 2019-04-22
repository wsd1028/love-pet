import Vue from "vue";
import Vuex from "vuex";
import studentModule from './studentModule.js'
import shopApply from './shopApply'
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    studentModule,
    shopApply
  }
});
