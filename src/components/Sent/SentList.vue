<template>
  <el-table :data="trades" style="width: 100%" max-height="250" border>
    <el-table-column align="center" prop="_id" label="订单号" width="300"></el-table-column>
    <el-table-column align="center" prop="name" label="用户姓名" width="150"></el-table-column>
    <el-table-column align="center" prop="phone" label="用户电话" width="180"></el-table-column>
    <el-table-column align="center" prop="tradeName" label="商品名称" width="150"></el-table-column>
    <el-table-column align="center" prop="price" label="商品价格(元)" width="100"></el-table-column>
    <el-table-column align="center" prop="number" label="商品数量" width="100"></el-table-column>
    <el-table-column align="center" prop="address" label="收货地址" width="300"></el-table-column>
    <el-table-column align="center" prop="address" label="评价" width="300"></el-table-column>
  </el-table>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("orderModule");
export default {
  computed: {
    ...mapState(["trades", "pagenation"])
  },
  created() {
    this.getTrades({ trade: "sent" });
  },
  methods: {
    ...mapActions(["getTrades"]),
    
  }
};
</script>

<style>
</style>