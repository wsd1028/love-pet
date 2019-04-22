<template>
  <el-table :data="serviceType" style="width: 100%">
    <el-table-column label="类型" width="150" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="花费时间" width="150" align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column label="普通" width="150" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">￥{{ scope.row.price[0].low }}</span>
      </template>
    </el-table-column>
    <el-table-column label="中等" width="150" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">￥{{ scope.row.price[1].middle }}</span>
      </template>
    </el-table-column>
    <el-table-column label="豪华" width="150" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.price[2].height }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.row._id)"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row._id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("serviceModule");
export default {
  computed: {
    ...mapState(["serviceType", "shopId","pagenation"])
  },
  created() {
    let shopId = this.shopId;
    this.getServiceType({ page: 1, rows: 5, type: "", value: "", shopId });
  },
  methods: {
    ...mapActions(["getServiceType","deleteServiceType","getUpdateService"]),
    del(id) {
      this.$confirm("此操作将永久删除该服务, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteServiceType(id)
          this.getServiceType({ page: this.pagenation.curpage,rows:5,type:"",value:"",shopId:this.shopId });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },handleEdit(id){
      this.getUpdateService(id);
    }
  }
};
</script>

<style scoped>
</style>
