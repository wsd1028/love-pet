<template>
  <div style="margin-top: 15px;">
    <el-input placeholder="请输入查询内容" v-model="data" class="input-with-select">
      <el-select v-model="selected" slot="prepend" placeholder="请选择查询类型">
        <el-option label="用户姓名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  components: {  },
  methods: {
    ...mapActions(["setStudents"]),
    searchStudent() {
      this.setStudents({ type: this.selected, value: this.data });
    }
  },
  data() {
    return {
      selected: "",
      data: ""
    };
  }
};
</script>

<style>
.el-select .el-input {
  width: 150px;
}
.input-with-select {
  background-color: #fff;
  width: 700px;
}
</style>
