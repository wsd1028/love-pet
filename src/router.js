import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/login";
import Register from "./components/register";
import Manage from "./components/manage";
import Sent from "./components/Sent";
import PendingTrade from "./components/PendingTrade";
import PendingServe from "./components/PendingServe";
import CompletedServe from "./components/completedServe";
import ServiceType from "./components/serviceType";
import AllService from "./components/allService";
import PetMaster from "./components/petMaster";
import Product from "./components/product";
import ShopApply from "./components/shopApply";
import ShopManage from "./components/shopManage";
import ShopSys from "./components/shopSys";
import Supplier from "./components/supplier";
import UserSys from "./components/userSys";
import ShopManager from "./components/ShopManager";
import Audit from './components/audit'
import Shops from './components/shops'
import BlackShops from './components/blackShops'
import CityMapStatistics from './components/cityMapStatistics'
import ProductSaleStatistics from './components/productSaleStatistics'
import ServiceSaleStatistics from './components/serviceSaleStatistics'
import ServiceSaleroomStatistics from './components/serviceSaleroomStatistics'
import ProductSaleroomStatistics from './components/productSaleroomStatistics'
import AllProductSaleroom from './components/allProductSaleroom'
import AllServiceSaleStatistics from './components/allServiceSaleStatistics'


Vue.use(VueRouter);
const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/auditShop", component: AuditShop },

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
      { path: "/manage/shopManager", component: ShopManager },
      { path: "/manage/petMaster", component: PetMaster },
      { path: "/manage/shopSys", component: ShopSys },
      { path: "/manage/supplier", component: Supplier },
      { path: "/manage/shops", component: Shops },
      { path: "/manage/audit", component: Audit },
      { path: "/manage/blackShops", component: BlackShops },
    ]
  },
  {
    path: "/shopManage",
    component: ShopManage,
    children: [
      { path: "/shopManage/product", component: Product },
      { path: "/shopManage/completedServe", component: CompletedServe },
      { path: "/shopManage/sent", component: Sent },
      { path: "/shopManage/pendingTrade", component: PendingTrade },
      { path: "/shopManage/pendingServe", component: PendingServe },
      { path: "/shopManage/allService", component: AllService },
      { path: "/shopManage/serviceType", component: ServiceType },
      { path: "/shopManage/cityMapStatistics", component: CityMapStatistics },
      { path: "/shopManage/productSaleStatistics", component: ProductSaleStatistics },
      { path: "/shopManage/serviceSaleStatistics", component: ServiceSaleStatistics },
      { path: "/shopManage/serviceSaleroomStatistics", component: ServiceSaleroomStatistics },
      { path: "/shopManage/productSaleroomStatistics", component: ProductSaleroomStatistics },
      { path: "/shopManage/allProductSaleroom", component: AllProductSaleroom },
      { path: "/shopManage/allServiceSaleStatistics", component: AllServiceSaleStatistics },


    ]
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
