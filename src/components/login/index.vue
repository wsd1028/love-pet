<template>
  <el-card class="box-card">
    <h1>登录</h1>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="ruleForm2.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm2.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="role">
        <el-select value="value" v-model="ruleForm2.role" placeholder="请选择角色">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
      <el-form-item style="float:right">
        <span>无【门店管理员】账号？点此</span>
        <a href="javascript:void(0);" @click="register" style="color:red">立即注册</a>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    let validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("手机号不能为空"));
      } else {
        callback();
      }
    };
    let validateRole = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("角色不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pwd: "",
        phone: "",
        role: ""
      },
      rules2: {
        pwd: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        role: [{ validator: validateRole, trigger: "blur" }]
      },
      options: [
        {
          value: "manager",
          label: "平台管理员"
        },
        {
          value: "shopWaiter",
          label: "门店管理员"
        }
      ],
      value: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.$refs[formName].model.role == "manager") {
            //平台管理员
            axios({
              method: "post",
              url: "/login",
              data: {
                phone: this.$refs[formName].model.phone,
                pwd: this.$refs[formName].model.pwd
              }
            }).then(res => {
              if (res.data.status == 1) {
                this.$message({
                  message: "恭喜登录成功! 欢迎进入系统管理界面",
                  type: "success"
                });
                this.$router.push("manage");
              } else {
                this.$message.error("该账号不存在，请重新输入！");
              }
            });
          } else {
            //店铺管理员
            axios({
              method: "post",
              url: "/login/shopManagerLogin",
              data: {
                phone: this.$refs[formName].model.phone,
                pwd: this.$refs[formName].model.pwd
              }
            }).then(res => {
              if (res.data) {
                //有账号
                if (res.data.status == "null") {
                  //有账户，无店
                  alert(
                    "该账户已注册账号，还未申请开店，点击【确定】进入店铺申请界面"
                  );
                  this.$router.push("shopApply");
                  return;
                } else if (res.data.status == "yes") {
                  //有账号，有店
                  // alert("该账户已注册账号,有店");
                  this.$message({
                    message: "恭喜登录成功! 欢迎进入店家管理界面",
                    type: "success"
                  });
                  this.$router.push("shopManage");
                  return;
                } else if (res.data.status == "audit") {
                  //有账号，但店铺在申请中
                  alert("该账户申请的店铺正在审核中。。。");
                  this.$router.push("auditShop");
                  return;
                } else {
                  this.$message({
                    showClose: true,
                    message: "该账号店铺【不可用】",
                    type: "warning"
                  });
                }
              } else {
                //无账号
                alert("该账号不存在，点击【确定】请立即注册");
                this.$router.push("register");
              }
            });
          }
        } else {
<<<<<<< HEAD
          // console.log("error submit!!");
=======
>>>>>>> 472c240f471d4ade5498b09d0de1ae7b058da7b2
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      this.$router.push("register");
    }
  }
};
</script>

<style scoped>
.box-card {
  width: 480px;
  margin: 50px auto;
}
h1 {
  text-align: center;
}
</style>


