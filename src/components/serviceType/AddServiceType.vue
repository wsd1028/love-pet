<template>
  <div class="div">
    <el-button type="primary" @click=" dialogFormVisible= true">增加服务类型</el-button>
    <el-dialog title="增加" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="addForm" :rules="addRules">
        <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="耗时" :label-width="formLabelWidth" prop="time">
          <el-input v-model="form.time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="普通价位" :label-width="formLabelWidth" prop="low">
          <el-input v-model="form.low" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="中等价位" :label-width="formLabelWidth" prop="middle">
          <el-input v-model="form.middle" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="豪华价位" :label-width="formLabelWidth" prop="height">
          <el-input v-model="form.height" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button @click="addNo('addForm')">取 消</el-button>
          <el-button type="primary" @click="add('addForm')">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("serviceModule");
export default {
  computed: {
    ...mapState(["pagenation", "shopId"])
  },
  data() {
    return {
      dialogFormVisible: false,
      addRules: {
        name: [{ required: true, message: "请输入名称", trigger: "change" }],
        time: [{ required: true, message: "请输入耗时", trigger: "change" }],
        low: [{ required: true, message: "请选择普通价位", trigger: "change" }],
        middle: [
          { required: true, message: "请选择中等价位", trigger: "change" }
        ],
        height: [
          { required: true, message: "请选择豪华价位", trigger: "change" }
        ]
      },
      form: {
        name: "",
        time: "",
        low: "",
        middle: "",
        height: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions(["addServiceType", "getServiceType"]),
    addNo(addForm) {
      this.$refs[addForm].resetFields();
      this.dialogFormVisible = false;
    },
    add(addForm) {
      this.$refs[addForm].validate(valid => {
        if (valid) {
          let shopId = this.shopId;
          let price = [];
          price[0] = { low: this.form.low };
          price[1] = { middle: this.form.middle };
          price[2] = { height: this.form.height };
          let data = {
            name: this.form.name,
            time: this.form.time,
            price,
            shopId
          };
          this.addServiceType(data);
          this.$refs[addForm].resetFields();
          this.dialogFormVisible = false;
          let page = this.pagenation.curpage;
          this.getServiceType({ page, shopId });
        } else {
          this.$message.error("请输入完整的信息");
        }
      });
    }
  }
};
</script>

<style scoped>
.div {
  display: inline-block;
  margin-right: 14px;
}
.btn {
  text-align: center;
}
</style>
