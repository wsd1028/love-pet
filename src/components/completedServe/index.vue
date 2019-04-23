<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <CompletedServeSearch/>
    </div>
    <el-table :data="tableData" style="width: 100%;" max-height="250" border>
      <el-table-column align="center" fixed prop="date" label="订单号" width="350"></el-table-column>
      <el-table-column align="center" prop="name" label="用户姓名" width="180"></el-table-column>
      <el-table-column align="center" prop="phone" label="用户电话" width="180"></el-table-column>
      <el-table-column align="center" prop="serveName" label="服务名称" width="180"></el-table-column>
      <el-table-column align="center" prop="time" label="服务时间" width="250"></el-table-column>
      <el-table-column align="center" prop="evaluate" label="服务评价" width="450"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import CompletedServeSearch from "./CompletedServeSearch";
export default {
  components: {
    CompletedServeSearch
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      input3: "",
      select: "",
      tableData: [
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          serveName: "洗澡",
          time: "2019-4-22 11:30",
          evaluate: "不错，很好"
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          serveName: "猫粮",
          time: "2019-4-22 11:30",
          evaluate: "不错，很好"
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          serveName: "猫粮",
          time: "2019-4-22 11:30",
          evaluate: "不错，很好"
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          serveName: "猫粮",
          time: "2019-4-22 11:30",
          evaluate: "不错，很好"
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          serveName: "猫粮",
          time: "2019-4-22 11:30",
          evaluate: "不错，很好"
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          serveName: "猫粮",
          time: "2019-4-22 11:30",
          evaluate: "不错，很好"
        },
        {
          date: "5cbd1c2ee0d4c6dae46fc9ce",
          name: "王小虎",
          phone: "12312312312",
          serveName: "猫粮",
          time: "2019-4-22 11:30",
          evaluate: "不错，很好"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>