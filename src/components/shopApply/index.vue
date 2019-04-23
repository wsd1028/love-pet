<template>
  <div class="body">
    <header>
      <el-steps :active="1">
        <el-step title="步骤 1" description="门店信息登记"></el-step>
        <el-step title="步骤 2" description="正在审核中..."></el-step>
        <el-step title="步骤 3" description="审核完成！"></el-step>
      </el-steps>
    </header>
    <section class="section">
      <div class="left">
        <el-form
          :model="ruleForm"
          :rules="rules"
          status-icon
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-form-item class="formItem" label="店铺名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item class="formItem" label="营业执照号码" prop="number">
            <el-input v-model="ruleForm.number"></el-input>
          </el-form-item>
          <el-form-item class="formItem" label="营业执照图片" prop="image">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="handleAvatarSuccess"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <!-- <el-form-item class="formItem" label="店铺头像" prop="headImg">
            <el-upload
              class="avatar-uploader border"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="headImage"
            >
              <img v-if="ruleForm.headImg" :src="ruleForm.headImg" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>-->
          <el-form-item class="formItem" label="营业地址" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item class="formItem" label="法人" prop="boss">
            <el-input v-model="ruleForm.boss"></el-input>
          </el-form-item>
          <el-form-item class="formItem" v-model.number="ruleForm.age" label="联系电话" prop="phone">
            <el-input type="phone" v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <span>已有账号？</span>
        <p class="login">立即登录&nbsp;</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else {
        if (/^1[3-9]\d{9}$/.test(value)) {
          callback();
        } else {
          callback(new Error("手机号格式不正确"));
        }
      }
    };
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      ruleForm: {
        name: "",
        number: "",
        image: "",
        headImg: "",
        address: "",
        boss: "",
        phone: ""
      },

      dialogVisible: false,
      rules: {
        name: [
          { required: true, message: "请输入店铺名称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        number: [
          { required: true, message: "请输入营业执照号码", trigger: "blur" },
          { min: 5, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入营业地址", trigger: "blur" }
        ],
        image: [
          { required: true, message: "请输入营业执照照片", trigger: "blur" }
        ],
        headImg: [
          { required: true, message: "请输入店铺头像", trigger: "blur" }
        ],
        boss: [{ required: true, message: "请输入法人姓名", trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(123);
          // console.log("ruleForm", this.ruleForm);

          alert("submit!");
        } else {
          // console.log("headUrl", this.headUrl);
          // console.log("ruleForm", this.ruleForm);
          console.log("image", this.ruleForm.image);
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      // console.log("file",file);
      this.ruleForm.image = URL.createObjectURL(file.raw);
    },
    // headImage(res, file) {
    //   this.ruleForm.headImg = URL.createObjectURL(file.raw);
    // },
    // change(file) {
    //   console.log(file.name);
    // },
    // uploadUrl() {
    //   return "http://localhost:3000/upLoad";
    // }
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style scoped>
.body {
  padding: 30px 200px;
}
.section {
  display: flex;
  justify-content: space-between;
  margin: 50px 50px 0 0;
}
.left {
  width: 70%;
  border-right: 1px dashed;
  text-align: center;
}
.formItem {
  width: 500px;
}
.right {
  height: 200px;
  width: 30%;
  text-align: center;
}
.login {
  color: rgb(0, 157, 255);
}

.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.border {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  width: 128px;
  height: 128px;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 128px;
  height: 128px;
  line-height: 128px;
  text-align: center;
}
.avatar {
  width: 128px;
  height: 128px;
  display: block;
}
</style>
