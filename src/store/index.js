import Vue from "vue";
import Vuex from "vuex";
import studentModule from './studentModule.js'
import shopApply from './shopApply.js'
import shops from './shops.js'
import ProModule from './ProModule.js'
import serviceModule from './serviceModule.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    studentModule,
    shopApply,
    shops,
    ProModule,
    serviceModule
  }

});
