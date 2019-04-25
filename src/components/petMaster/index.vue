<template>
  <div>
  <el-input style="width:500px" placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-select   v-model="values" slot="prepend" placeholder="请选择" @input="searchType" :checkout="true">
     <el-option label="昵称" value="name"></el-option>
     <el-option label="姓名" value="realName"></el-option>
     <el-option label="VIP" value="vip"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
  </el-input>
  <el-table
    :data="petMaster"
     row-key="_id"
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
     <el-table-column label="宠物信息" style="width:140px;">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          plain
          @click="view(scope.row)"
          >点击查看</el-button>
      </template>
    </el-table-column>
  <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
         plain
          size="mini"
          @click="defriend()"
          type="danger"
          :class="[scope.row.state==0?'classA':'classB']"
          >拉黑</el-button>
        <el-button
        style="display:none"
          size="mini"
          type="success"
           :class="[scope.row.state==1?'classA':'classB']"
          @click="cancelRachel()"
           >取消拉黑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="width:600px;margin:0 auto">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="cur_page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagination.eachpage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "usersModule"
);
export default {
  data() {
    return {
      search: {
        value: ""
      },
      value: "",
      type: "",
      cur_page: 1,
      values: "",
      classA: "classA",
      classB: "classB"
    };
  },
  created() {
    this.setPetMaster();
  },
  computed: {
    ...mapState(["petMaster", "visible", "petMasterinfor"]),
    ...mapState({ pagination: state => state.pagination })
    // blacklist:{
    //   set(blacklist){
    //     this.setPetMasterinfor({
    //          ...this.petMasterinfor,

    //     })
    //   }
    // }
  },
  watch: {
    "search.value"() {
      this.type = this.search.value;
    }
  },
  methods: {
    ...mapActions(["setPetMaster"]),

    searchType(e) {
      this.type = e;
    },
    searchBtn() {
      console.log(this.type, this.value);
      this.setPetMaster({ type: this.type, value: this.value });
    },
    defriend() {
      this.$alert("是否拉黑此用户?", "提示", {
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: action => {
          this.$message({
            message: `已拉黑`
          });
        }
      });
    },
    handleSizeChange(val) {
      // console.log("ok")
      // console.log(`每页 ${val} 条`);
      this.setPetMaster({ rows: val });
    },
    handleCurrentChange(val) {
      // console.log("进来了")
      // console.log(`当前页: ${val}`);
      this.cur_page = val;
      this.setPetMaster({ page: val });
    }
  }
};
</script>

<style scoped>
.classA {
  display: none;
}
.classB {
  display: block;
}
</style>
