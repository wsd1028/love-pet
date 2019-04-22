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
          <el-input v-model="form.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特色说明:" :label-width="formLabelWidth">
          <el-input v-model="form.explain" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格:" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片:" :label-width="formLabelWidth">
          <el-input v-model="form.image" autocomplete="off"></el-input>
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
    addNo(form) {
      this.dialogFormVisible = false;
    },
    add(form) {
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style scoped>
.btn{
  text-align: center;
}
.div{
  display: inline-block;
  margin-right: 14px;
}
</style>