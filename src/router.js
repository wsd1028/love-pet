import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/login";
import Register from "./components/register";
import Manage from "./components/manage";
import Sent from "./components/Sent";
import PendingTrade from "./components/PendingTrade";
import PendingServe from "./components/PendingServe";
import AllService from "./components/allService";
import ServiceType from "./components/serviceType";
import CompletedServe from "./components/completedServe";
import PetMaster from "./components/petMaster";
import Product from "./components/product";
import ShopApply from "./components/shopApply";
import ShopManage from "./components/shopManage";
import ShopSys from "./components/shopSys";
import Supplier from "./components/supplier";
import UserSys from "./components/userSys";
import Audit from "./components/audit";
import Shops from "./components/shops";
import BlackShops from "./components/blackShops";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Manage },
  { path: "/register", component: Register },
  {
    path: "/login",
    component: Login
  },
  { path: "/shopApply", component: ShopApply },
  {
    path: "/manage",
    component: Manage,
    children: [
      { path: "/manage/userSys", component: UserSys },
      { path: "/manage/petMaster", component: PetMaster },
      { path: "/manage/shopSys", component: ShopSys },
      { path: "/manage/supplier", component: Supplier },
      { path: "/manage/shops", component: Shops },
      { path: "/manage/audit", component: Audit },
      { path: "/manage/blackShops", component: BlackShops }
    ]
  },
  {
    path: "/shopManage",
    component: ShopManage,
    children: [
      { path: "/shopManage/product", component: Product },
      { path: "/shopManage/sent", component: Sent },
      { path: "/shopManage/completedServe", component: CompletedServe },
      { path: "/shopManage/pendingTrade", component: PendingTrade },
      { path: "/shopManage/pendingServe", component: PendingServe },
      { path: "/shopManage/allService", component: AllService },
      { path: "/shopManage/serviceType", component: ServiceType }
    ]
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;