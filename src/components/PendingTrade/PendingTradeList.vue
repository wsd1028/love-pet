<template>
  <el-table :data="trades" style="width: 100%" max-height="250" border>
    <el-table-column align="center" prop="_id" label="订单号" width="300"></el-table-column>
    <el-table-column align="center" prop="name" label="用户姓名" width="150"></el-table-column>
    <el-table-column align="center" prop="phone" label="用户电话" width="180"></el-table-column>
    <el-table-column align="center" prop="products.name" label="商品名称" width="150"></el-table-column>
    <el-table-column align="center" prop="products.totalNum" label="商品价格(元)" width="100"></el-table-column>
    <el-table-column align="center" prop="number" label="商品数量" width="100"></el-table-column>
    <el-table-column align="center" prop="address" label="收货地址" width="300"></el-table-column>
    <el-table-column align="center" prop="status" label="订单状态" width="120"></el-table-column>
    <el-table-column align="center" label="操作" width="180">
      <template slot-scope="scope" >
        <el-button @click="change(scope.row._id,scope.row.status)" type="primary" circle>
          <i class="el-icon-check"></i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("orderModule");
export default {
  computed: {
    ...mapState(["trades", "pagenation"])
  },
  created() {
    this.getTrades({ trade: "pending" });
  },
  methods: {
    ...mapActions(["getTrades"]),
    change(id,status) {
      if(status == "待收货"){
        this.$alert('订单正在等待收货，请耐心等待', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: "info",
              message: "待完成"
            });
          }
        });
      }else{
      this.$confirm("是否确定发货?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(action => {
          if (action == "confirm") {
            axios({
              method: "put",
              url: "/order/commodity/" + id
            }).then(res => {
              this.getTrades({ trade: "pending" });
              this.$message({
                type: "success",
                message: "操作成功!"
              });
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
            this.$message({
              type: "info",
              message: "已取消"
            });
          }
        });
      }

      
    }
  }
};
</script>

<style>
</style>
