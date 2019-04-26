<template>
  <el-table :data="suppliers" style="width: 100%;" class="el1">
    <el-table-column label="供应商" row-key="_id" width="150" style=" ">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="电话" width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.phone }}</span>
      </template>
    </el-table-column>
    <el-table-column label="地址" width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.adress }}</span>
      </template>
    </el-table-column>
    <el-table-column label="法人" width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.people }}</span>
      </template>
    </el-table-column>
    <el-table-column label="营业执照" width="150">
      <template slot-scope="scope">
        <img :src="url+scope.row.img" style=" width:70px; ">
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" plain  @click="handleEdit(scope.row._id)"></el-button>
        <el-button type="danger" icon="el-icon-delete" plain @click="open2(scope.row._id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("supplierModule");
export default {
  data() {
    return {
      loading2: true,
      url: "/upload/"
    };
  },
  created() {
    this.getSuppliers();
    this.deleteSupplier();
  },
  computed: {
    ...mapState(["suppliers", "pagenation"])
  },
  methods: {
    ...mapActions(["getSuppliers", "deleteSupplier", "getUpdateSupplier"]),
    open2(id) {
      this.$confirm("此操作将永久删除此管理商户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteSupplier(id);
          this.getSuppliers({ page: this.pagenation.curpage });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit(id) {
      this.getUpdateSupplier(id);
    }
  }
};
</script>

<style scoped>
.el1 {
  text-align: center;
}
</style>
