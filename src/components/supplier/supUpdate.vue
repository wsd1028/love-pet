<template>
  <el-dialog title="修改学生">
    <el-form>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="age" autocomplete="off"></el-input>
      </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="gender" autocomplete="off"></el-input>
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
    age: {
      set(age) {
        this.setSupplier({
          ...this.supplier,
          age
        });
      },
      get() {
        return this.supplier.age;
      }
    },
    gender: {
      set(gender) {
        this.setSupplier({
          ...this.supplier,
          gender
        });
      },
      get() {
        return this.supplier.gender;
      }
    }
  },
  methods: {
    ...mapMutations(["setSupplier", "setUpdateStuVis"]),
    ...mapActions(["updateSupplier", "getSupplier"]),
    update(id) {
      this.updateSupplier(this.supplier);
      this.setUpdateStuVis(false);
      this.getSupplier();
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
