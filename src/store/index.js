import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
<<<<<<< HEAD
=======
Vue.use(Vuex);

>>>>>>> 8b2836c622a7c642439f49142a88f1666cfdfd74
import shopApply from "./shopApply.js";
import shops from "./shops.js";
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import allServiceModule from "./allServiceModule.js";
import orderModule from "./orderModule";
import usersModule from "./usersModule.js";
<<<<<<< HEAD
=======
import ProModule from "./ProModule.js";
import serviceModule from "./serviceModule.js";
import userSysModule from "./userSysModule.js";
<<<<<<< HEAD
>>>>>>> wangjing
=======
import supplierModule from './supplierModule.js'

>>>>>>> 8b2836c622a7c642439f49142a88f1666cfdfd74
=======
import shopManagerModule from "./shopManagerModule.js";
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
    supplierModule,
    allServiceModule,
    usersModule
=======
    ProModule,
    serviceModule,
<<<<<<< HEAD
    userSysModule
>>>>>>> wangjing
=======
    userSysModule,
    shopManagerModule
>>>>>>> wangjing
  }
});