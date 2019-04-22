<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
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
export default {
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
.box-card {
  height: 100%;
}
.el-select .el-input {
  width: 150px;
}
.input-with-select {
  background-color: #fff;
  width: 700px;
}
</style>