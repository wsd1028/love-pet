import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/login";
import Register from "./components/register";
import Manage from "./components/manage";
import Sent from "./components/Sent";
import PendingTrade from "./components/PendingTrade";
import PendingServe from "./components/PendingServe";
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
      { path: "/manage/supplier", component: Supplier }
    ]
  },
  {
    path: "/shopManage",
    component: ShopManage,
    children: [
      { path: "/shopManage/product", component: Product },
      // { path: "/shopManage/service", component: Service },
      { path: "/shopManage/completedServe", component: CompletedServe },
      { path: "/shopManage/sent", component: Sent },
      { path: "/shopManage/pendingTrade", component: PendingTrade },
      { path: "/shopManage/pendingServe", component: PendingServe },
      { path: "/shopManage/allService", component: AllService },
      { path: "/shopManage/serviceType", component: ServiceType },
      // {
      //   path: "/shopManage/order",
      //   component: Order,
      //   children: [
      //     { path: "/shopManage/order/Sent", component: Sent },
      //     { path: "/shopManage/order/PendingTrade", component: PendingTrade },
      //     { path: "/shopManage/order/PendingServe", component: PendingServe }
      //   ]
      // }
    ]
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
