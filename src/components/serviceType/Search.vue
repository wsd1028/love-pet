<template>
  <div class="div">
    <el-select v-model="type" placeholder="请选择" class="select">
      <el-option label="名称" value="name"/>
      <el-option label="耗时" value="time"/>
    </el-select>
    <el-input v-model="value" placeholder="请输入内容" class="inputStyle"></el-input>
    <el-button icon="el-icon-search" circle type="primary" @click="search"></el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "serviceModule"
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
    ...mapActions(["getServiceType"]),
    search() {
      let type = this.type;
      let value = this.value;
      let shopId=this.shopId;
      this.setSearchRule({ ...this.searchRule, type });
      this.setSearchRule({ ...this.searchRule, value });
      this.getServiceType({ type, value,shopId });
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
