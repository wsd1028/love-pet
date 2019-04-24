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
      <template slot-scope="scope">
        <div style="width:50px;height:50px;overflow:hidden; border-radius:60px;margin:0 auto">
          <img :src="src+scope.row.headImg" width="50px" height="50px">
        </div>
      </template>
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
          @click="view(scope.row)"
          >点击查看</el-button>
      </template>
    </el-table-column>
  <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="defriend(scope.row.state,scope.row._id)"
          type="warning"
          :class="[scope.row.state==0?'classA':'classB']"
          >拉黑</el-button>
        <el-button
      
          size="mini"
          type="success"
           :class="[scope.row.state==1?'classA':'classB']"
          @click="cancelKey(scope.row.state,scope.row._id)"
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
      classB: "classB",
       src: "http://192.168.43.178:3000/upload/"
    };
  },
  created() {
    this.setPetMaster();
  },
  computed: {
    ...mapState(["petMaster", "visible", "petMasterinfor"]),
    ...mapState({ pagination: state => state.pagination })
  
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
   defriend(state, id) {
      console.log(id);
 
      this.$confirm("拉黑该用户，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        state=0
        axios({
          method: "put",
          url: "/petMaster/" + id,
          data: {
            id,
            state
          }
        }).then(res => {
          console.log(state);
          this.setPetMaster({page:this.cur_page});
        });
      });
    },
    cancelKey(state, id) {
      
      this.$confirm("取消拉黑，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
       state=1
        axios({
          method: "put",
          url: "/petMaster/" + id,
          data: {
            id,
            state
          }
        }).then(res => {
          this.setPetMaster({page:this.cur_page});
        });
      });
    },
    view(row) {
      console.log(row);
      const h = this.$createElement;
      this.$msgbox({
        title: "宠物信息",
        message: h("p",null, [
          h("div", { style: "text-align:center" },'宠物名：'+row.pet[0].name),
          h("div", { style: "text-align:center" },'类别：'+row.pet[0].type),
          h("div", { style: "text-align:center" },'品类：'+row.pet[0].kind),
          h("div", { style: "text-align:center" },'颜色：'+row.pet[0].color),
          h("div", { style: "text-align:center" },'出生日期：'+row.pet[0].birthday),
          h("div", { style: "text-align:center" },'性格：'+row.pet[0].trait),
        ]),
        confirmButtonText: '确定',
      })
    },
    handleSizeChange(val) {
      
      this.setPetMaster({ rows: val });
    },
    handleCurrentChange(val) {
      
      this.cur_page = val;
      this.setPetMaster({ page: val });
    }
  }
};
</script>

<style scoped>
.classA {
  display: none;
  margin:0 auto;
}
.classB {
  display: block;
  margin:0 auto;
}
</style>
