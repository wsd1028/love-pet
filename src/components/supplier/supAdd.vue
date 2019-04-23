<template>
  <div class="div">
    <el-button class="title1" type="primary" @click="dialogFormVisible = true">增加供应商</el-button>
    <el-dialog title="增加" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="addForm">
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.adress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button @click="addNo('addForm')">取 消</el-button>
          <el-button type="primary" @click="add('addForm')">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("supplierModule");
export default {
  computed: {
    ...mapState(["pagenation"])
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        adress: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions(["addSupplier", "getSuppliers"]),
    addNo(form) {
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
    },
    add(form) {
      let data = { ...this.form };
      this.addSupplier(data);
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
      let page = this.pagenation.curpage;
      this.getSuppliers({ page });
    }
  }
};
</script>
<style scoped>
.btn {
  display: block;
  text-align: center;
}
.div {
  display: inline-block;
  margin-right: 14px;
}
</style>
