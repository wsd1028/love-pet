<template>
  <el-container>
    <el-header style="display:flex; font-size: 12px; justify-content: space-between;">
      <h1>门店管理 &nbsp ({{shopName}}店)</h1>
      <!-- <span>{{shopName}}</span> -->
      <div style="margin-top:8px">
        <span style="color:black;font-size:16px;font-weight:bold;margin-right:20px;">欢迎: {{loginName}}</span>
        <el-button type="primary" plain @click="removeSession" style="font-size:16px;font-weight:bold">退出</el-button>
      </div>
    </el-header>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-active="url" :default-openeds="[`${url}`]">
          <el-menu-item index="/shopManage/product">
            <i class="el-icon-goods"></i>商品管理</el-menu-item>
          <el-submenu index="/shopManage/allService">
            <template slot="title">
              <i class="el-icon-service"></i>服务管理</template>
            <el-menu-item-group>
              <el-menu-item index="/shopManage/allService">所有服务</el-menu-item>
              <el-menu-item index="/shopManage/serviceType">服务类型</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>订单管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span>商品订单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/shopManage/sent">
                  <i class="el-icon-circle-check"></i>
                  <span>已完成</span>
                </el-menu-item>
                <el-menu-item index="/shopManage/pendingTrade">
                  <i class="el-icon-loading"></i>
                  <span>未完成</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>服务订单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/shopManage/completedServe">
                  <i class="el-icon-circle-check"></i>
                  <span>已完成</span>
                </el-menu-item>
                <el-menu-item index="/shopManage/pendingServe">
                  <i class="el-icon-loading"></i>
                  <span>待完成</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
          <el-submenu index="/shopManage/cityMapStatistics">
            <template slot="title">
              <i class="el-icon-upload"></i>统计</template>
            <el-menu-item-group>
              <el-menu-item index="/shopManage/cityMapStatistics">城市地图统计</el-menu-item>
              <el-menu-item index="/shopManage/productSaleStatistics">商品销量统计</el-menu-item>
              <el-menu-item index="/shopManage/serviceSaleStatistics">服务销量统计</el-menu-item>
              <el-menu-item index="/shopManage/serviceSaleroomStatistics">服务销售额统计</el-menu-item>
              <el-menu-item index="/shopManage/productSaleroomStatistics">商品销售额统计</el-menu-item>
              <el-menu-item index="/shopManage/allProductSaleroom">商品总销售额统计</el-menu-item>
              <el-menu-item index="/shopManage/allServiceSaleStatistics">服务总销售额统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view>

        </router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("shopManageCom");
export default {
  data() {
    return {
      url: this.$router.history.current.path,
      loginName: "",
      shopName: "",
      id: ""
    };
  },
  created() {
    this.getSession();
  },
  beforeUpdated() {
    this.getSession();
  },
  methods: {
    ...mapMutations(["setShopId"]),
    getSession() {
      axios({
        method: "get",
        url: "/login/shopManager/getSession"
      }).then(res => {
        if (res.data.loginName) {
          if (!this.loginName) {
            this.loginName = res.data.loginName;
            this.id = res.data.shops.$id;
            this.setShopId(this.id);
            axios({
              method:"get",
              url:"/login/shop",
              params:{
                id:this.id
              }
            }).then((res)=>{
              this.shopName=res.data.name;
            })
          }
        } else {
          this.$router.push("/login");
        }
      });
    },
    removeSession() {
      axios({
        method: "get",
        url: "/login/shopManager/removeSession"
      }).then(res => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  color: #333;
}
</style>
