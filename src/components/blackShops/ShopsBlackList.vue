<template>
  <div>
    <el-table :data="blackList" style="width: 100%">
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
          <img style="width:40px;height:60px" :src="url+scope.row.image" alt>
        </template>
      </el-table-column>
      <el-table-column label="法人" width="100" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.boss }}</span>
        </template>
      </el-table-column>
      <el-table-column label="头像图片" width="180" align="center">
        <template slot-scope="scope">
          <img style="width:40px;height:60px" :src="url+scope.row.headImg" alt>
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
      <el-table-column label="VIP等级" width="100" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.vipLevel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="佣金比例" width="100" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.commission }}%</span>
        </template>
      </el-table-column>
      <el-table-column label="门店地址" width="250" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150" fixed="right" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            icon="el-icon-edit"
            @click="recoverShop(scope.row._id)"
          >恢复门店</el-button>
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
      userId:""
    };
  },
  computed: {
    ...mapState(["blackList"])
  },
  created() {
    this.getShops({ status: "no" });
  },
  methods: {
    ...mapActions(["getShops"]),
    recoverShop(id) {
      this.$confirm("是否将该店铺恢复为正常营业？", "提示", {
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
            this.getShops({ status: "no" });
             axios({
              url:"/shopSys/user/"+this.userId,
              method:"put",
              data:{
                status:"yes"
              }
            }).then((res)=>{
              console.log(res.data)
            });
          });
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>
