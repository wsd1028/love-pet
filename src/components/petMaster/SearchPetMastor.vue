<template>
  <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择" @input="searchType">
      <el-option label="昵称" value="name"></el-option>
      <el-option label="姓名" value="realname"></el-option>
      <el-option label="VIP" value="vip"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
  </el-input>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "usersModule"
);
export default {
  data() {
    return {
      select: "",
      type: "",
      value: ""
    };
  },
  methods: {
    ...mapActions(["setUsers"]),
    searchType(e) {
      this.type = e;
    },
    searchBtn() {
      this.setUsers({type:this.type, value:this.value});
     
    }
  }
};
</script>