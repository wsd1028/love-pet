<template>
  <el-dialog title="修改学生" :visible.sync="students.visible">
    <el-form>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="phone" autocomplete="off"></el-input>
      </el-form-item>
    <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="address" autocomplete="off"></el-input>
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
  "studentsModule"
);
export default {
  computed: {
    ...mapState(["supplier"]),
    name: {
      set(name) {
        this.setStudent({
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
        this.setStudent({
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
        this.setStudent({
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
    ...mapMutations(["setStudent", "setUpdateStuVis"]),
    ...mapActions(["updateStudent", "getStudents"]),
    update(id) {
      this.updateStudent(this.supplier);
      this.setUpdateStuVis(false);
      this.getStudents();
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
