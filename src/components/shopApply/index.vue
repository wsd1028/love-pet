<template>
  <div class="body">
    <header>
      <el-steps :active="active">
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
              class="avatar-uploader border"
              action="/shopApply/upload "
              :show-file-list="false"
              :on-success="handleAvatarSuccessImage"
              :before-upload="beforeAvatarUploadImage"
            >
              <img v-if="ruleForm.images" :src="ruleForm.images" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item class="formItem" label="店铺头像" prop="headImg">
            <el-upload
              class="avatar-uploader border"
              action="/shopApply/upload "
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="ruleForm.headImgs" :src="ruleForm.headImgs" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item class="formItem" label="营业城市" prop="city">
            <el-input v-model="ruleForm.city"></el-input>
          </el-form-item>
          <el-form-item class="formItem" label="营业详细地址" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item class="formItem" label="法人" prop="boss">
            <el-input v-model="ruleForm.boss"></el-input>
          </el-form-item>
          <el-form-item class="formItem" v-model.number="ruleForm.phone" label="联系电话" prop="phone">
            <el-input type="phone" v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item class="formItem" label="经营范围" prop="feature">
            <el-checkbox-group v-model="ruleForm.feature">
              <el-checkbox label="宠物美容" name="feature"></el-checkbox>
              <el-checkbox label="宠物洗澡" name="feature"></el-checkbox>
              <el-checkbox label="宠物粮食" name="feature"></el-checkbox>
              <el-checkbox label="宠物零食" name="feature"></el-checkbox>
              <el-checkbox label="宠物玩具" name="feature"></el-checkbox>
              <el-checkbox label="宠物服装" name="feature"></el-checkbox>
              <el-checkbox label="宠物医疗" name="feature"></el-checkbox>
              <el-checkbox label="宠物看管" name="feature"></el-checkbox>
              <el-checkbox label="宠物销售" name="feature"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" :plain="true">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <span>已有店铺？</span>
        <p class="login">立即登录&nbsp;</p>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("shops");
export default {
  computed: {
    ...mapState(["userId"])
  },
  created() {
    this.getSession();
  },
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
    var validateCity = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入城市名"));
      } else {
        if (/^[\u4e00-\u9fa5]{2,16}$/.test(value)) {
          callback();
        } else {
          callback(new Error("请输入中文城市"));
        }
      }
    };
    return {
      active: 1,
      // images: "",
      // headImgs: "",
      ruleForm: {
        images: "",
        headImgs: "",
        name: "",
        number: "",
        image: "",
        headImg: "",
        userId: "",
        city: "",
        cityLocation: {
          longitude: "",
          latitude: ""
        },
        address: "",
        location: {
          longitude: "",
          latitude: ""
        },
        boss: "",
        phone: "",
        feature: []
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
        city: [{ validator: validateCity, trigger: "blur" }],
        address: [
          { required: true, message: "请输入营业详细地址", trigger: "blur" }
        ],
        image: [
          { required: true, message: "请输入营业执照照片", trigger: "blur" }
        ],
        headImg: [
          { required: true, message: "请输入店铺头像", trigger: "blur" }
        ],
        boss: [{ required: true, message: "请输入法人姓名", trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        feature: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个类型",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(["setUserId"]),
    getSession() {
      axios({
        url: "/shopApply/getSession",
        method: "get"
      }).then(res => {
        if (res.data) {
          if (res.data) {
            this.ruleForm.userId = res.data._id;
            this.setUserId(res.data._id);
          } 
        }
      });
    },
    submitForm(formName) {
      var map = new BMap.Map("l-map");
      // // 创建地址解析器实例
      var myGeo = new BMap.Geocoder();
      // getPoint根据地址生成经纬度
      myGeo.getPoint(this.ruleForm.city, point => {
        this.ruleForm.cityLocation.longitude = point.lng;
        this.ruleForm.cityLocation.latitude = point.lat;
        myGeo.getPoint(this.ruleForm.address, point => {
          this.ruleForm.location.longitude = point.lng;
          this.ruleForm.location.latitude = point.lat;
          this.$refs[formName].validate(valid => {
            if (valid) {

              let feature = this.ruleForm.feature.join(",");
              axios({
                url: "/shopApply",
                method: "post",
                data: {
                  ...this.ruleForm,
                  status: "audit",
                  feature: feature,
                  vipLevel: "1级",
                  commission: "0.5",
                  shopWaiter: [],
                  comment: []
                }
              }).then(res => {
                this.$message({
                  message: "提交成功！",
                  type: "success"
                });
                this.headImg = this.image = "";
                this.$refs[formName].resetFields();
                let shopsId = res.data._id;
                axios({
                  url: "/shopApply/addShops/" + this.userId,
                  method: "put",
                  data: {
                    shopsId: shopsId,
                    status: "audit"
                  }
                }).then(res => {
                  this.$router.push("auditShop");
                });
              });
            } else {
              this.$alert("请填写完整的信息", "提示", {
                confirmButtonText: "确定"
              });
              return false;
            }
          });
        });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccessImage(res, file) {
      this.ruleForm.image = res;
      this.ruleForm.images = "/upload/" + res;
    },
    beforeAvatarUploadImage(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file, fileList) {
      this.ruleForm.headImg = res;
      this.ruleForm.headImgs = "/upload/" + res;

      this.dialogVisible = true;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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

.border {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  width: 128px;
  height: 128px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
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
