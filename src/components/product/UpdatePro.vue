<template>
  <div class="div">
    <el-dialog title="修改" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="商品名称:" :label-width="formLabelWidth">
          <el-input v-model="name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品类型:" :label-width="formLabelWidth">
          <el-input v-model="type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="采购数量:" :label-width="formLabelWidth">
          <el-input v-model="totalNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="材质:" :label-width="formLabelWidth">
          <el-input v-model="material" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="适用规格:" :label-width="formLabelWidth">
          <el-input v-model="petSize" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="专属规格:" :label-width="formLabelWidth">
          <el-input v-model="petType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="包装规格:" :label-width="formLabelWidth">
          <el-input v-model="weight" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="口味:" :label-width="formLabelWidth">
          <el-input v-model="taste" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="功效:" :label-width="formLabelWidth">
          <el-input v-model="effect" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产地:" :label-width="formLabelWidth">
          <el-input v-model="country" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出厂日期:" :label-width="formLabelWidth">
          <el-input v-model="date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="保质期:" :label-width="formLabelWidth">
          <el-input v-model="freshDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商:" :label-width="formLabelWidth">
          <el-input v-model="company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特色说明:" :label-width="formLabelWidth">
          <el-input v-model="explain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格:" :label-width="formLabelWidth">
          <el-input v-model="price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片:" :label-width="formLabelWidth">
          <el-input v-model="image" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item class="btn">
          <el-button @click="dialogFormVisible(false)">取 消</el-button>
          <el-button type="primary" @click="update()">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
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
      formLabelWidth: "90px"
    };
  },
  methods: {
      update(){
          this.dialogFormVisible = false;
      }
  }
};
</script>
<style>
</style>