import Vue from "vue";
import Vuex from "vuex";
import shopApply from './shopApply.js'
import shops from './shops.js'
import ProModule from './ProModule.js'
import serviceModule from './serviceModule.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    shopApply,
    shops,
    ProModule,
    serviceModule
  }

});
