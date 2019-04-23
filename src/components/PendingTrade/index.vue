<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
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
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import PendingTradeSearch from "./PendingTradeSearch";
export default {
  components: {
    PendingTradeSearch
  },
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
          state: "待发货"
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
          state: "待发货"
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
          state: "待发货"
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
          state: "待发货"
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
          state: "待发货"
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
          state: "待发货"
        },{
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          tradeName: "猫粮",
          number:"5",
          site: "上海市普陀区金沙江路 1518 弄",
          state: "待发货"
        }
      ]
    };
  }
};
</script>
<style >
</style>