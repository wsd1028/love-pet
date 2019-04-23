<template>
  <div>
    <!-- <template slot-scope="scope">
      <el-button type="primary" circle @click="blackShops(scope.row._id)">查看黑名店店铺</el-button>
    </template>-->
    <el-table :data="blackList" style="width: 100%" >
      <el-table-column label="门店名称" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="法人" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.boss }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="门店地址" width="250" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary" plain
            icon="el-icon-edit"
            @click="recoverShop(scope.row._id)"
          >恢复门店</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("shops");
export default {
  computed: {
    ...mapState(["shops", "blackList"])
  },
  created() {
    this.getShops();
  },
  methods: {
    ...mapActions(["getShops"]),
    recoverShop(id) {
      this.$confirm("是否将该店铺恢复为正常营业？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            url: "/shopSys/" + id,
            method: "put",
            data: {
              isUse: "yes"
            }
          }).then(res => {
            this.getShops();
          });
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>
