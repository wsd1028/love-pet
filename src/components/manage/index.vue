<template>
  <el-container>
    <el-header style="display:flex; font-size: 12px; justify-content: space-between;" >
      <h1>系统管理</h1>
      <div style="margin-top:8px" >
        <span style="color:black;font-size:16px;font-weight:bold;margin-right:20px;">欢迎: {{name}}</span>
        <el-button type="primary" plain @click="removeSession" style="font-size:16px;font-weight:bold">退出</el-button>
      </div>
    </el-header>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-active="url" :default-openeds="[`${url}`]">
          <el-submenu index="/manage/userSys">
            <template slot="title">用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="/manage/userSys">平台管理员</el-menu-item>
              <el-menu-item index="/manage/shopManager">门店管理员</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/manage/petMaster">宠主管理
          </el-menu-item>

          <el-submenu index="/manage/shopSys">
            <template slot="title">门店管理</template>
            <el-menu-item-group>
              <el-menu-item index="/manage/shops">营业门店</el-menu-item>
              <el-menu-item index="/manage/blackShops">黑名单门店</el-menu-item>
              <el-menu-item index="/manage/audit">门店审核</el-menu-item>
              <el-menu-item index="/manage/failedShops">未通过门店</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/manage/supplier">供应商管理</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: this.$router.history.current.path,
      name: ""
    };
  },
  created() {
    this.getSession();
  },
  beforeUpdated() {
    this.getSession();
  },
  methods: {
    getSession() {
      axios({
        method: "get",
        url: "/getSession"
      }).then(res => {
        if (res.data.name) {
          if (!this.name) {
            this.name = res.data.name;
          }
        } else {
          this.$router.push("/login");
        }
      });
    },
    removeSession() {
      axios({
        method: "get",
        url: "/removeSession"
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
.el-menu{
  height:100%
}
.el-aside {
  color: #333;
}
</style>
