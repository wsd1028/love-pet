import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import shopApply from "./shopApply.js";
import shops from "./shops.js";
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import orderModule from "./orderModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    orderModule,
    shopApply,
    shops,
    ProModule,
    serviceModule
=======
import orderModule from './orderModule.js'
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    orderModule
>>>>>>> wyd
  }
});
