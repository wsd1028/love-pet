import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import shopApply from './shopApply.js'
import shops from './shops.js'
import ProModule from './ProModule.js'
import serviceModule from './serviceModule.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
=======
import shopApply from "./shopApply.js";
import shops from "./shops.js";
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import orderModule from "./orderModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    orderModule,
>>>>>>> b996af92ad674f0c2e766fc49a85874f4787b0ef
    shopApply,
    shops,
    ProModule,
    serviceModule
  }
});
