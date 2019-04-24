<template>
     <el-table
    :data="users"
    style="width: 100%">
    <el-table-column
        prop="phone"
      label="电话"
      width="130">
    </el-table-column>
    <el-table-column
        prop="name"  
      label="昵称"
      width="110">
    </el-table-column>
     <el-table-column
        prop="realName"       
      label="姓名"
      width="110">
    </el-table-column>
     <el-table-column
        prop="vip"
      label="会员卡"
      width="110">
    </el-table-column>
    <el-table-column
        prop="headImg"
      label="头像"
      width="110">
    </el-table-column>
    <el-table-column
        prop="address"
      label="送货地址"
      width="110">
    </el-table-column>
    <el-table-column
        prop="score"
      label="积分"
      width="110">
    </el-table-column>
    <el-table-column
        prop="pet"
      label="宠物信息"
      width="110">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">拉黑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="del(scope.row._id)">取消</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("usersModule");
export default {
  
  data() {
    return {
    };
  },
  created() {
      this.setUsers();
  },
  computed: {
      ...mapState(["users","user","visible"])
  },
  methods: {
    ...mapMutations(["setVisible","setUser"]),
    ...mapActions(["setUsers"]),
    handleEdit( row) {
     console.log(row);
      this.setVisible(true)
      this.setUsers(row);
       
    },
  }
};
</script>
