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
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保质期:" :label-width="formLabelWidth">
          <el-input v-model="form.freshDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商:" :label-width="formLabelWidth">
          <!-- <el-input v-model="form.company" autocomplete="off"></el-input> -->
          <el-select v-model="form.company" placeholder="请选择供应商" autocomplete="off" class="select">
            <el-option label value="山东猫粮有限公司"/>
          </el-select>
        </el-form-item>
        <el-form-item label="特色说明:" :label-width="formLabelWidth">
          <el-input v-model="form.explain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格:" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片:" :label-width="formLabelWidth">
          <!-- <el-input v-model="form.image" autocomplete="off"></el-input> -->
          <!-- <el-upload
            autocomplete="off"
            v-model="form.image"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>-->
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
const { mapActions, mapState } = createNamespacedHelpers("ProModule");
export default {
  computed: {
    ...mapState(["pagenation"])
  },
  data() {
    return {
      // fileList2: [
      //   {
      //     name: "food.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //   },
      //   {
      //     name: "food2.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //   }
      // ],
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
      formLabelWidth: "90px"
    };
  },
  methods: {
    ...mapActions(["addProduct", "getProducts"]),
    addNo(form) {
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
    },
    add(form) {
      let data = { ...this.form };
      this.addProduct(data);
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
      let page = this.pagenation.curpage;
      this.getProducts({ page });
    },
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // }
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