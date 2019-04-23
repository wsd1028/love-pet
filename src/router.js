import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/login";
import Register from "./components/register";
import Manage from "./components/manage";
import Sent from "./components/sent";
import PendingTrade from "./components/pendingTrade";
import PendingServe from "./components/pendingServe";
import CompletedServe from "./components/completedServe";
import PetMaster from "./components/petMaster";
import Product from "./components/product";
import AllService from "./components/allService";
import ServiceType from "./components/serviceType";
import ShopApply from "./components/shopApply";
import ShopManage from "./components/shopManage";
import ShopSys from "./components/shopSys";
import Supplier from "./components/supplier";
import UserSys from "./components/userSys";
import Audit from './components/audit'
import Shops from './components/shops'
import BlackShops from './components/blackShops'

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Manage },
  { path: "/register", component: Register },
  {
    path: "/login",
    component: Login
  },
  { path: "/shopApply", component: ShopApply },
  { path: "/login", component: Login },  
  {
    path: "/manage",
    component: Manage,
    children: [
      { path: "/manage/userSys", component: UserSys },
      { path: "/manage/petMaster", component: PetMaster },
      { path: "/manage/shopSys", component: ShopSys },
<<<<<<< HEAD
      { path: "/manage/supplier", component: Supplier }
=======
<<<<<<< HEAD
      { path: "/manage/supplier", component: Supplier },
      { path: "/manage/shops", component: Shops },
      { path: "/manage/audit", component: Audit },
      { path: "/manage/blackShops", component: BlackShops },

=======
      { path: "/manage/supplier", component: Supplier }
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
>>>>>>> f52e8e5d4ac4870c64b408d7837315ca09f4c7c5
    ]
  },
  {
    path: "/shopManage",
    component: ShopManage,
    children: [
      { path: "/shopManage/product", component: Product },
<<<<<<< HEAD
=======
<<<<<<< HEAD
      { path: "/shopManage/service", component: Service },
<<<<<<< HEAD
      { path: "/shopManage/order", component: Order }
=======
      { path: "/shopManage/completedServe", component: CompletedServe },
      { path: "/shopManage/sent", component: Sent },
      { path: "/shopManage/pendingTrade", component: PendingTrade },
      { path: "/shopManage/pendingServe", component: PendingServe }
=======
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
      { path: "/shopManage/allService", component: AllService },
      { path: "/shopManage/serviceType", component: ServiceType },
      {
        path: "/shopManage/order",
        component: Order,
        children: [
          { path: "/shopManage/order/Sent", component: Sent },
          { path: "/shopManage/order/PendingTrade", component: PendingTrade },
          { path: "/shopManage/order/PendingServe", component: PendingServe }
        ]
      }
<<<<<<< HEAD
=======
>>>>>>> 1e3789ef98d5162cc682f1cae281e9dcc8d16737
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
>>>>>>> f52e8e5d4ac4870c64b408d7837315ca09f4c7c5
    ]
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
