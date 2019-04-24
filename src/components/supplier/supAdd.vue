<template>
  <div class="div">
    <el-button class="title1" type="primary" @click="dialogFormVisible = true">增加供应商</el-button>
    <el-dialog title="增加" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="addForm">
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入您的公司名"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off" placeholder="请输入您的手机号"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.adress" autocomplete="off" placeholder="请输入您的地址"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人" :label-width="formLabelWidth">
          <el-input v-model="form.pepole" autocomplete="off" placeholder="请输入法定代表人姓名"></el-input>
        </el-form-item>
        <el-form-item label="上传营业执照" :label-width="formLabelWidth">
          <el-upload
            action="/supplier/upload"
            list-type="picture-card"
            :on-success="handIeAvatarSuccess"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
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
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        name: "",
        phone: "",
        adress: "",
        pepole: "",
        img:""
      },
      formLabelWidth: "120px",
      
    };
  },
  methods: {
    handIeAvatarSuccess(response, file, fileList) {
      this.dialogImageUrl = "/upload/" + response;
      this.form.img = response;
      console.log("response",response)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    ...mapActions(["addSupplier", "getSuppliers"]),
    addNo(form) {
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
    },
    add(form) {
      let data = { ...this.form };
      console.log("pcaddMess",data)
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
