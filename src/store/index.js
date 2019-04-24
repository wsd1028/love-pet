import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import shopApply from "./shopApply.js";
import shops from "./shops.js";
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import allServiceModule from "./allServiceModule.js";
import orderModule from "./orderModule";
import usersModule from "./usersModule.js";
import userSysModule from "./userSysModule.js";
import supplierModule from "./supplierModule.js";
import shopManagerModule from "./shopManagerModule.js";


export default new Vuex.Store({
  modules: {
    orderModule,
    shopApply,
    shops,
    ProModule,
    supplierModule,
    allServiceModule,
    usersModule,
    serviceModule,
    shopManagerModule,
    userSysModule
  }
});
