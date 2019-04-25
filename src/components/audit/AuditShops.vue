<template>
  <div>
    <el-table :data="audit" style="width: 100%" >
      <el-table-column label="门店名称" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="营业执照号" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="营业执照照片" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.image }}</span>
        </template>
      </el-table-column>
      <el-table-column label="法人" width="100" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.boss }}</span>
        </template>
      </el-table-column>
      <el-table-column label="头像图片" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.headImg }}</span>
        </template>
      </el-table-column>
      <el-table-column label="营业特色" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.feature }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="140" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px" align="center">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="门店地址" width="250" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button type="primary" plain icon="el-icon-edit" @click="blackShop(scope.row._id)">通过审核</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("shops");
export default {
  data() {
    return {
      url: "/upload/",
      userId: ""
    };
  },
  computed: {
    ...mapState(["audit"])
    // ...mapMutations(["setBlackList"])
  },
  created() {
    this.getShops({status:"audit"});
  },
  methods: {
    ...mapActions(["getShops"]),
    
    blackShop(id) {
      this.$confirm("是否通过该店铺的审核？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            url: "/shopSys/" + id,
            method: "get"
          }).then(res => {
           this. userId = res.data.userId;
          });
          axios({
            url: "/shopSys/" + id,
            method: "put",
            data: {
              status: "yes"
            }
          }).then(res => {
            axios({
              url:"/shopSys/user/"+this.userId,
              method:"put",
              data:{
                status:"yes"
              }
            }).then((res)=>{
              console.log(res.data)
            });
            this.getShops({ status: "audit" });
            this.$message({
              type: "success",
              message: "通过成功!"
            });
          });
        })
        .catch(() => {

          this.$message({
            type: "info",
            message: "已取消通过"
          });
        });
    },
    failed(id) {
      console.log(666);
      axios({
            url: "/shopSys/" + id,
            method: "get"
          }).then(res => {
           this. userId = res.data.userId;
          });
      axios({
        url: "/shopSys/" + id,
        method: "put",
        data: {
          status: "failed"
        }
      }).then(res => {
        this.getShops({ status: "failed" });
        axios({
              url:"/shopSys/user/"+this.userId,
              method:"put",
              data:{
                status:"failed"
              }
            }).then((res)=>{
              console.log(res.data)
            });
      });
      this.$message({
        type: "success",
        message: "审核不通过!"
      });
    }
  }
};
</script>

<style>
</style>
