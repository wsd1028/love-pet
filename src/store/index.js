import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import studentModule from './studentModule.js'
import shopApply from './shopApply.js'
import shops from './shops.js'
=======
import ProModule from './ProModule.js'
import serviceModule from './serviceModule.js'
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
<<<<<<< HEAD
    studentModule,
    shopApply,
    shops
=======
    ProModule,
    serviceModule
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
  }

});
