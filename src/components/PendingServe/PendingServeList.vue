<template>
  <el-table :data="serves" style="width: 100%;" max-height="250" border>
    <el-table-column align="center" fixed prop="_id" label="订单号" width="350"></el-table-column>
    <el-table-column align="center" prop="users.name" label="用户姓名" width="180"></el-table-column>
    <el-table-column align="center" prop="users.phone" label="用户电话" width="180"></el-table-column>
    <el-table-column align="center" prop="type" label="服务名称" width="180"></el-table-column>
    <el-table-column align="center" prop="date" label="服务日期" width="250"></el-table-column>
    <el-table-column align="center" prop="time" label="预约时间" width="250"></el-table-column>
    <el-table-column align="center" label="操作" width="180">
      <template slot-scope="scope">
        <el-button @click="change(scope.row._id)" type="primary" circle>
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
    ...mapState(["serves", "pagenation"])
  },
  created() {
    this.getServes({ serve: "pending" });
  },
  methods: {
    ...mapActions(["getServes"]),
    change(id) {
      this.$confirm("是否确定完成该订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(action => {
          if (action == "confirm") {
            axios({
              method: "put",
              url: "/order/serve/" + id
            }).then(res => {
              this.getServes({ serve: "pending" });
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
};
</script>

<style>
</style>
