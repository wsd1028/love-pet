<template>
<div>
 <el-input style="width:500px" placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-select   v-model="values" slot="prepend" placeholder="请选择" @input="searchType" :checkout="true">
      <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.values" :checkout="true"></el-option>
      
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
  </el-input>
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
</div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "usersModule"
);
export default {
  data() {
    return {
      // student: {},
      // pagination: {},
      value: "",
      values: "",
      search: {
        value: ""
      },
      options: [{ values: "昵称" }, { values: "姓名" }, { values: "会员卡" }]
    };
  },
  created() {
    this.setUsers();
  },
  computed: {
    ...mapState(["users", "user"])
  },
  watch: {
    "search.value"() {
      this.type = this.search.value;
    }
  },

  methods: {
    ...mapMutations(["setVisible", "setUser"]),
    ...mapActions(["setUsers"]),
    show() {
      axios({
        method: "get",
        url: "/petMaster"
        // params: {
        //   page,
        //   rows,
        //   type,
        //   value
        // }
      }).then(res => {
        // console.log(res.data);
        this.users = res.data;
        // this.pagination = res.data;
      });
    },
    searchType(e) {
      this.type = e;
    },
    // searchBtn(){
    //   let typeNwe =this.type;
    //   let valueNew =this.value
    //      axios({
    //     method: "get",
    //     url: "/petMaster",
    //     params: {
    //      typeNwe,
    //      valueNew
    //     }
    //   }).then(res => {
    //     console.log(res.data);
    //     this.users = res.data;
    //     // this.pagination = res.data;
    //   });
    // },

    searchBtn() {
      console.log(this.type, this.value);
      this.setUsers({ type: this.type, value: this.value });
    },
    setSearchInfo(info) {
      this.searchInfo = info;
    }
  },
  created() {
    this.show();
  }
};
</script>

<style>
</style>