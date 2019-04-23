<template>
  <div class="div">
    <el-select v-model="type" placeholder="请选择" class="select">
      <el-option label="门店名称" value="name"/>
      <el-option label="地址" value="address"/>
      <el-option label="法人" value="boss"/>
    </el-select>
    <el-input v-model="value" placeholder="请输入内容" class="inputStyle"></el-input>
    <el-button icon="el-icon-search" type="primary" plain @click="search">搜索</el-button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "shops"
);
export default {

    computed: {
    ...mapState(["searchShop"])
  },
  data() {
    return {
      type: "",
      value: ""
    };
  },
  methods: {
    ...mapMutations(["setSearch"]),
    ...mapActions(["getShops"]),
    search() {
        console.log(123)
      let type = this.type;
      let value = this.value;
      this.setSearch({ ...this.searchShop, type });
      this.setSearch({ ...this.searchShop, value });
      this.getShops({page:1,rows:5, type, value });
    }
  }
};
</script>

<style>
.div {
  display: inline-block;
  display: flex;
  width: 500px;
  margin-bottom: 30px;
}
.select {
  width: 200px;
  display: inline-block;
}
.inputStyle {
  display: inline-block;
  width: 200px;
}
</style>
