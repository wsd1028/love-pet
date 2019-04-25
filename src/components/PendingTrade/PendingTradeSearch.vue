<template>
  <div style="margin-top: 15px;">
    <el-input placeholder="请输入查询内容" v-model="value" class="input-with-select">
      <el-select v-model="type" slot="prepend" placeholder="请选择查询类型">
        <el-option label="用户姓名" value="name"></el-option>
        <el-option label="订单号码" value="$id"></el-option>
        <el-option label="用户电话" value="phone"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "orderModule"
);
export default {
  data() {
    return {
      type: "",
      value: ""
    };
  },
  computed: {
    ...mapState(["searchRule","shopId"])
  },
  methods: {
    ...mapMutations(["setSearchRule"]),
    ...mapActions(["getTrades"]),
    search() {
      let type = this.type;
      let value = this.value;
      let trade = "pending";
      let id = this.shopId;
      this.setSearchRule({ ...this.searchRule, type });
      this.setSearchRule({ ...this.searchRule, value });
      this.getTrades({ type, value, trade,id });
    }
  }
  
};
</script>

<style scoped>
.el-select .el-input {
  width: 150px;
}
.input-with-select {
  background-color: #fff;
  width: 700px;
}
</style>
