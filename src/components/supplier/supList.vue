<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="phone" label="电话" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.row._id)"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="open2(scope.row._id)"></el-button>
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
      tableData: [
        {
          name: "王小虎",
          phone: "18728696959",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "王小虎",
          phone: "18728696959",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "王小虎",
          phone: "18728696959",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "王小虎",
          phone: "18728696959",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created() {
    this.getSuppliers();
  },
  methods: {
    ...mapActions(["getSuppliers"]),
    open2(id) {
      this.$confirm("此操作将永久删除管理商户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // this.deleteSupplier(id);
          // this.getSuppliers({ page: this.pagenation.curpage });
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
