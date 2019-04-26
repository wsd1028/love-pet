<template>
  <div>
    <el-button type="primary" plain @click="dialogFormVisible = true">增加管理员</el-button>
    <el-dialog title="增加平台管理员" :visible.sync="dialogFormVisible" width="550px" style="font-weight:bold;">
      <el-form :model="form" status-icon :rules="rules2" ref="form" style="height:230px">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="pwd">
          <el-input v-model="form.pwd" autocomplete="off" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item style="float:right">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add('form')">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("userSysModule");
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      } else {
        if (value === "") {
          callback(new Error("请输入真实姓名"));
        } else {
          if (/^[\u4e00-\u9fa5]{2,4}$/.test(value)) {
            callback();
          } else {
            callback(new Error("请输入2-4位中文姓名"));
          }
        }
      }
    };
    let validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("手机号不能为空"));
      } else {
        if (value === "") {
          callback(new Error("请输入手机号"));
        } else {
          if (/^1\d{10}$/.test(value)) {
            callback();
          } else {
            callback(new Error("请输入11位手机号"));
          }
        }
      }
    };
    let validatePwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        pwd: ""
      },
      rules2: {
        name: [{ validator: validateName, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }]
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions(["setUserSys"]),
    add(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogFormVisible = false;
          axios({
            method: "post",
            url: "/userSys",
            data: {
              name: this.form.name,
              phone: this.form.phone,
              pwd: this.form.pwd
            }
          }).then(res => {
            // this.$emit("show");
            this.setUserSys();
            this.form.name = "";
            this.form.phone = "";
            this.form.pwd = "";
          });
        }
      });
    }
  }
};
</script>

<style scoped>

</style>

