<template>
  <!-- <el-dialog title="修改学生" :visible.sync="serviceType.visible">
    <el-form>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="耗时" :label-width="formLabelWidth">
        <el-input v-model="time" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-form-item label="普通价位" :label-width="formLabelWidth">
      <el-input v-model="low" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="中等价位" :label-width="formLabelWidth">
      <el-input v-model="middle" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="豪华价位" :label-width="formLabelWidth">
      <el-input v-model="height" autocomplete="off"></el-input>
    </el-form-item>
    <div slot="footer" class="btn">
      <el-button @click="setUpdateStuVis(false)">取 消</el-button>
      <el-button type="primary" @click="update(serviceType._id)">确 定</el-button>
    </div>
  </el-dialog> -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "serviceModule"
);
export default {
//   computed: {
//     ...mapState(["student"]),
//     name: {
//       set(name) {
//         this.setStudent({
//           ...this.student,
//           name
//         });
//       },
//       get() {
//         return this.student.name;
//       }
//     },
//     time: {
//       set(time) {
//         this.setStudent({
//           ...this.student,
//           time
//         });
//       },
//       get() {
//         return this.student.time;
//       }
//     },
//     gender: {
//       set(gender) {
//         this.setStudent({
//           ...this.student,
//           gender
//         });
//       },
//       get() {
//         return this.student.gender;
//       }
//     }
//   },
//   methods: {
//     ...mapMutations(["setStudent", "setUpdateStuVis"]),
//     ...mapActions(["updateStudent", "getStudents"]),
//     update(id) {
//       this.updateStudent(this.student);
//       this.setUpdateStuVis(false);
//       this.getStudents();
//     }
//   },
//   data() {
//     return {
//       formLabelWidth: "120px"
//     };
//   }
};
</script>

<style scoped>
.btn {
  text-align: center;
}
</style>
