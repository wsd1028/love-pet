<template>
  <div class="div">
    <el-button type="primary" @click="dialogFormVisible = true">增加商品</el-button>
    <el-dialog title="增加商品" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="addForm">
        <el-form-item label="商品名称:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品类型:" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="采购数量:" :label-width="formLabelWidth">
          <el-input v-model="form.totalNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="材质:" :label-width="formLabelWidth">
          <el-input v-model="form.material" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="适用规格:" :label-width="formLabelWidth">
          <el-input v-model="form.petSize" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="专属规格:" :label-width="formLabelWidth">
          <el-input v-model="form.petType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="包装规格:" :label-width="formLabelWidth">
          <el-input v-model="form.weight" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="口味:" :label-width="formLabelWidth">
          <el-input v-model="form.taste" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="功效:" :label-width="formLabelWidth">
          <el-input v-model="form.effect" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产地:" :label-width="formLabelWidth">
          <el-input v-model="form.country" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出厂日期:" :label-width="formLabelWidth">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            value-format="yyyy-MM-dd"
            style="width: 100%;"
            prop="date1"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="保质期:" :label-width="formLabelWidth">
          <el-input v-model="form.freshDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商:" :label-width="formLabelWidth">
          <el-select v-model="form.company" placeholder="请选择供应商" autocomplete="off" class="select">
            <el-option
              v-for="item in supplier"
              v-bind:key="item._id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="特色说明:" :label-width="formLabelWidth">
          <el-input v-model="form.explain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格:" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片:" :label-width="formLabelWidth">
          <el-upload
            action="/product/upload"
            list-type="picture-card"
            :on-success="handleAvatarSuccess"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
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
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("ProModule");
export default {
  computed: {
    ...mapState(["pagenation", "supplier", "shopId"])
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        type: "",
        totalNum: "",
        material: "",
        petSize: "",
        petType: "",
        weight: "",
        taste: "",
        effect: "",
        country: "",
        date: "",
        freshDate: "",
        company: "",
        explain: "",
        price: "",
        image: ""
      },
      formLabelWidth: "90px",
      rules: {
        name: [
          {
            required: true,
            message: "请输入内容",
            trigger: "blur"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  created() {
    this.getSupplier();
  },
  methods: {
    ...mapActions(["addProduct", "getProducts", "getSupplier"]),
    addNo(form) {
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
    },
    add(form) {
      let shopId = this.shopId;
      let data = { ...this.form,shopId };
      this.addProduct(data);
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
      let page = this.pagenation.curpage;
      this.getProducts({ page,shopId });
    },
    handleAvatarSuccess(response, file, fileList) {
      this.dialogImageUrl = "/upload/" + response;
      this.form.image = response;
    },
    handleRemove(file, fileList) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.btn {
  text-align: center;
}
.div {
  display: inline-block;
  margin-right: 14px;
}
</style>