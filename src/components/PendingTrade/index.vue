<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
<<<<<<< HEAD
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入查询内容" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择查询类型">
            <el-option label="用户姓名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" max-height="250" border>
      <el-table-column fixed prop="date" label="订单号" width="250"></el-table-column>
      <el-table-column prop="name" label="用户姓名" width="120"></el-table-column>
      <el-table-column prop="phone" label="用户电话" width="120"></el-table-column>
      <el-table-column prop="tradeName" label="商品名称" width="120"></el-table-column>
      <el-table-column prop="number" label="商品数量" width="50"></el-table-column>
      <el-table-column prop="site" label="收货地址" width="300"></el-table-column>
      <el-table-column prop="state" label="订单状态" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
=======
      <PendingTradeSearch/>
    </div>
    <el-table :data="tableData" style="width: 100%" max-height="250" border>
      <el-table-column align="center" prop="date" label="订单号" width="350"></el-table-column>
      <el-table-column align="center" prop="name" label="用户姓名" width="180"></el-table-column>
      <el-table-column align="center" prop="phone" label="用户电话" width="180"></el-table-column>
      <el-table-column align="center" prop="tradeName" label="商品名称" width="180"></el-table-column>
      <el-table-column align="center" prop="number" label="商品数量" width="100"></el-table-column>
      <el-table-column align="center" prop="site" label="收货地址" width="350"></el-table-column>
      <el-table-column align="center" prop="state" label="订单状态" width="120"></el-table-column>
      <el-table-column align="center" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="primary"
            circle
          >发</el-button>
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
<<<<<<< HEAD
export default {
=======
import PendingTradeSearch from "./PendingTradeSearch";
export default {
  components: {
    PendingTradeSearch
  },
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      input3: '',
      select: '',
      tableData: [
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
<<<<<<< HEAD
          state: "待收货"
=======
          state: "待发货"
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
<<<<<<< HEAD
          state: "待收货"
=======
          state: "待发货"
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
<<<<<<< HEAD
          state: "待收货"
=======
          state: "待发货"
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
<<<<<<< HEAD
          state: "待收货"
=======
          state: "待发货"
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
<<<<<<< HEAD
          state: "待收货"
=======
          state: "待发货"
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
<<<<<<< HEAD
          state: "待收货"
=======
          state: "待发货"
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
<<<<<<< HEAD
          state: "待收货"
=======
          state: "待发货"
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
        }
      ]
    };
  }
};
</script>
<<<<<<< HEAD
<style scoped>
.el-select .el-input {
  width: 150px;
}
.input-with-select{
  background-color: #fff;
  width: 700px;
}
=======
<style >
>>>>>>> 4dca283f7190582e30282cd0802918d6870c5944
</style>