<template>
  <el-table :data="services" style="width: 100%">
    <el-table-column label="名称" width="125" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="类型" width="125" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.serviceType.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="开放时间段" width="125" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.schedule }}</span>
      </template>
    </el-table-column>
    <el-table-column label="耗时" width="125" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.useTime }}</span>
      </template>
    </el-table-column>
    <el-table-column label="价格" width="125" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">￥{{ scope.row.price }}</span>
      </template>
    </el-table-column>
    <el-table-column label="服务人员" width="125" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.waiter }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" plain @click="handleEdit(scope.row._id)">修改</el-button>
        <el-button type="danger" icon="el-icon-delete" plain @click="del(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "allServiceModule"
);
export default {
  computed: {
    ...mapState(["shopId", "services", "pagenation"])
  },
  created() {
      let shopId = this.shopId;
      this.getServices({ shopId });
  },
  methods: {
    ...mapActions(["getServices", "deleteServices", "getUpdateService"]),
    del(id) {
      this.$confirm("此操作将永久删除该服务, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteServices(id);
          this.getServices({
            page: this.pagenation.curpage,
            shopId: this.shopId
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit(id) {
      this.getUpdateService(id);
    }
  }
};
</script>

<style scoped>
</style>
