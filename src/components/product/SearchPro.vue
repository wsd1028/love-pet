<template>
  <div class="div">
    <el-select v-model="type" placeholder="请选择" class="select">
      <el-option label="商品名称" value="name"/>
      <el-option label="商品类型" value="type"/>
      <el-option label="采购数量" value="totalNum"/>
      <el-option label="材质" value="material"/>
      <el-option label="适用规格" value="petSize"/>
      <el-option label="专属规格" value="petType"/>
      <el-option label="包装规格" value="weight"/>
      <el-option label="口味" value="taste"/>
      <el-option label="功效" value="effect"/>
      <el-option label="产地" value="country"/>
      <el-option label="出厂日期" value="date"/>
      <el-option label="保质期" value="freshDate"/>
      <el-option label="供应商" value="company"/>
      <el-option label="特色说明" value="explain"/>
      <el-option label="价格" value="price"/>
    </el-select>
    <el-input v-model="value" placeholder="请输入内容" class="inputStyle"></el-input>
    <el-button icon="el-icon-search" plain type="primary" @click="search"></el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "ProModule"
);
export default {
  computed: {
    ...mapState(["searchRule","shopId"])
  },
  data() {
    return {
      type: "",
      value: ""
    };
  },
  methods: {
    ...mapMutations(["setSearchRule"]),
    ...mapActions(["getProducts"]),
    search() {
      let type = this.type;
      let value = this.value;
      let shopId=this.shopId;
      this.setSearchRule({ ...this.searchRule, type });
      this.setSearchRule({ ...this.searchRule, value });
      this.getProducts({ type, value,shopId });
    }
  }
};
</script>

<style scoped>
.div {
  display: inline-block;
}
.select {
  width: 94px;
  display: inline-block;
}
.inputStyle {
  display: inline-block;
  width: 200px;
}
</style>