<template>
  <el-table :data="serves" style="width: 100%;" max-height="250" border>
    <el-table-column align="center" fixed prop="_id" label="订单号" width="350"></el-table-column>
    <el-table-column align="center" prop="users.name" label="用户姓名" width="180"></el-table-column>
    <el-table-column align="center" prop="users.phone" label="用户电话" width="180"></el-table-column>
    <el-table-column align="center" prop="service.name" label="服务名称" width="180"></el-table-column>
    <el-table-column align="center" prop="time" label="服务时间" width="250"></el-table-column>
    <el-table-column align="center" prop="comment" label="服务评价" width="450"></el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("orderModule");
export default {
  computed: {
    ...mapState(["serves", "pagenation","shopId"])
  },
  created() {
    this.getServes({serve:"completed",id:this.shopId});
    console.log(this.shopId)
  },
  methods: {
    ...mapActions(["getServes"])
  }
};
</script>

<style>
</style>
