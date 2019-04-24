<template>
  <div class="div">
    <el-select v-model="type" placeholder="请选择" class="select">
      <el-option label="供应商" value="name"/>
      <el-option label="电话" value="phone"/>
      <el-option label="地址" value="adress"/>
    </el-select>
    <el-input v-model="value" placeholder="请输入内容" class="inputStyle"></el-input>
    <el-button icon="el-icon-search" circle type="primary" @click="search"></el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "supplierModule"
);
export default {
  computed: {
    ...mapState(["searchRule"])
  },
  data() {
    return {
      type: "",
      value: ""
    };
  },
  methods: {
    ...mapMutations(["setSearchRule"]),
    ...mapActions(["getSuppliers"]),
    search() {
      let type = this.type;
      let value = this.value;
      this.setSearchRule({ ...this.searchRule, type });
      this.setSearchRule({ ...this.searchRule, value });
      this.getSuppliers({ type, value });
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
