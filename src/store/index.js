import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import shopApply from "./shopApply.js";
import shops from "./shops.js";
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import allServiceModule from "./allServiceModule.js";
import orderModule from "./orderModule";
import usersModule from "./usersModule.js";
=======
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import userSysModule from "./userSysModule.js";
>>>>>>> wangjing
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
<<<<<<< HEAD
    orderModule,
    shopApply,
    shops,
    ProModule,
    serviceModule,
    allServiceModule,
    usersModule
=======
    ProModule,
    serviceModule,
    userSysModule
>>>>>>> wangjing
  }
});
