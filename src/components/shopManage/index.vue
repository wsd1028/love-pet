<template>
  <el-container>
    <el-header style="display:flex; font-size: 12px; justify-content: space-between;">
      <h1>店家管理</h1>
      <div>
        <el-button type="primary">退出</el-button>
        <span>吴少冬</span>
      </div>
    </el-header>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-active="url" :default-openeds="[`${url}`]">
          <el-menu-item index="/shopManage/product">商品管理</el-menu-item>
          <el-submenu index="/shopManage/allService">
            <template slot="title">服务管理</template>
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
                <el-menu-item index="/shopManage/order/Sent">
                  <i class="el-icon-circle-check"></i>
                  <span>已发货</span>
                </el-menu-item>
                <el-menu-item index="/shopManage/order/PendingTrade">
                  <i class="el-icon-loading"></i>
                  <span>未发货</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>服务订单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/shopManage/order">
                  <i class="el-icon-circle-check"></i>
                  <span>已完成</span>
                </el-menu-item>
                <el-menu-item index="/shopManage/order/PendingServe">
                  <i class="el-icon-loading"></i>
                  <span>待完成</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      url: this.$router.history.current.path
    };
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
