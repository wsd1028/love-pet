<template>
  <div>
    <!-- <el-button type="primary" @click="visible = true">修改</el-button> -->
    <el-dialog title="修改门店管理员状态" :visible.sync="editVisible" width="550px" style="font-weight:bold;">
      <el-form :model="oneShopManager">
        <el-form-item label="真实姓名" :label-width="formLabelWidth">
          <el-input v-model="oneShopManager.realName" autocomplete="off" style="width:300px" disabled></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="oneShopManager.phone" autocomplete="off" style="width:300px" disabled>></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="oneShopManager.pwd" autocomplete="off" style="width:300px" disabled>></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth" prop="status">
          <el-select value="value" v-model="ruleForm2.status" >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="update(oneShopManager._id)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "shopManagerModule"
);
import axios from "axios";
export default {
  computed: {
    ...mapState(["updateVisible", "oneShopManager"]),
    editVisible: {
      set(updateVisible) {
        this.setVisible(updateVisible);
      },
      get() {
        return this.updateVisible;
      }
    }
  },
  data() {
    return {
       ruleForm2: {
        status: "appling"
      },
      formLabelWidth: "120px",
      options: [
        {
          value: "appling",
          label: "申请中"
        },
        {
          value: "agree",
          label: "同意申请"
        },
        {
          value: "refuse",
          label: "拒绝申请"
        }
      ],
      value: ""
    };
  },
  methods: {
    ...mapActions(["setshopManagers", "setVisible", "setoneShopManager"]),
    update(id) {
      this.setVisible(false);
      axios({
        method: "put",
        url: "/shopManager/" + id,
        data: {
          name: this.oneShopManager.name,
          phone: this.oneShopManager.phone,
          pwd: this.oneShopManager.pwd
        }
      }).then(res => {
        this.setshopManagers();
      });
    },
    cancle() {
      this.setVisible(false);
    }
  }
};
</script>

<style>
</style>



