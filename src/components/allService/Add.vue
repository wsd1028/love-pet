<template>
  <div class="div">
    <el-button type="primary" @click=" dialogFormVisible= true">增加服务</el-button>
    <el-dialog title="增加服务" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="addForm">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务类型:" :label-width="formLabelWidth">
          <el-select v-model="type" @change="chooseType" placeholder="请选择服务类型">
            <el-option
              v-for="item in serviceType"
              :key="item._id"
              :lable="item._id"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开放时间" :label-width="formLabelWidth">
          <el-input v-model="form.schedule" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="耗时" :label-width="formLabelWidth">
          <el-input v-model="form.useTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务人员:" :label-width="formLabelWidth">
          <el-select v-model="form.waiter" @change="chooseWaiter" placeholder="请选择服务人员">
            <el-option
              v-for="item in waiter"
              :key="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
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
const { mapActions, mapState } = createNamespacedHelpers("allServiceModule");
export default {
  computed: {
    ...mapState(["pagenation", "shopId", "serviceType","waiter"])
  },
  data() {
    return {
      dialogFormVisible: false,
      serviceTypeId: "",
      type:"",
      form: {
        name: "",
        waiter:"",
        price:"",
        useTime:"",
        schedule:"",
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.getServiceType({ shopId: this.shopId });
    this.getWaiter( this.shopId)
  },
  methods: {
    ...mapActions(["addServiceType", "getServiceType","addServices","getServices","getWaiter"]),
    chooseType(value) {
      for (let i = 0; i < this.serviceType.length; i++) {
        if (value == this.serviceType[i].name) {
          this.serviceTypeId = this.serviceType[i]._id;
        }
      }
    },
    chooseWaiter(value){
      this.form.waiter=value;
    },
    addNo(form) {
      this.$refs[form].resetFields();
      this.dialogFormVisible = false;
    },
    add(form) {
        let shopId = this.shopId;
        let serviceTypeId = this.serviceTypeId;
        let data = { ...this.form,shopId,serviceTypeId };
        this.addServices(data);
        this.$refs[form].resetFields();
        this.dialogFormVisible = false;
        let page = this.pagenation.curpage;
        this.getServices({ page, shopId });
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
