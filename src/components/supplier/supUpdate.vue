<template>
  <el-dialog title="修改供应商" :visible.sync="supplier.visible">
    <el-form>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="phone" autocomplete="off"></el-input>
      </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="adress" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="btn">
      <el-button @click="setUpdateStuVis(false)">取 消</el-button>
      <el-button type="primary" @click="update(supplier._id)">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "supplierModule"
);
export default {
  computed: {
    ...mapState(["supplier"]),
    name: {
      set(name) {
        this.setSupplier({
          ...this.supplier,
          name
        });
      },
      get() {
        return this.supplier.name;
      }
    },
    phone: {
      set(phone) {
        this.setSupplier({
          ...this.supplier,
          phone
        });
      },
      get() {
        return this.supplier.phone;
      }
    },
    adress: {
      set(adress) {
        this.setSupplier({
          ...this.supplier,
          adress
        });
      },
      get() {
        return this.supplier.adress;
      }
    }
  },
  methods: {
    ...mapMutations(["setSupplier", "setUpdateStuVis"]),
    ...mapActions(["updateSupplier", "getSuppliers"]),
    update(id) {
      this.updateSupplier(this.supplier);
      this.setUpdateStuVis(false);
      this.getSuppliers();
    }
  },
  data() {
    return {
      formLabelWidth: "120px"
    };
  }
};
</script>
<style scoped>
.btn {
  text-align: center;
}
</style>
