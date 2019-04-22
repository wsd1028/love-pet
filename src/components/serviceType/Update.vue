<template>
  <el-dialog title="修改服务类型" :visible.sync="serviceTypeOne.visible">
    <el-form>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="耗时" :label-width="formLabelWidth">
        <el-input v-model="time" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="普通价位" :label-width="formLabelWidth">
        <el-input v-model="low" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="中等价位" :label-width="formLabelWidth">
        <el-input v-model="middle" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="豪华价位" :label-width="formLabelWidth">
        <el-input v-model="height" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="btn">
      <el-button @click="setUpdateServiceTypeVis(false)">取 消</el-button>
      <el-button type="primary" @click="update(serviceTypeOne.id)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "serviceModule"
);
export default {
  computed: {
    ...mapState(["serviceTypeOne","shopId"]),
    name: {
      set(name) {
        this.setUpdateServiceType({
          ...this.serviceTypeOne,
          name
        });
      },
      get() {
        return this.serviceTypeOne.name;
      }
    },
    time: {
      set(time) {
        this.setUpdateServiceType({
          ...this.serviceTypeOne,
          time
        });
      },
      get() {
        return this.serviceTypeOne.time;
      }
    },
    low: {
      set(low) {
        this.setUpdateServiceType({
          ...this.serviceTypeOne,
          low
        });
      },
      get() {
        return this.serviceTypeOne.low;
      }
    },
    middle: {
      set(middle) {
        this.setUpdateServiceType({
          ...this.serviceTypeOne,
          middle
        });
      },
      get() {
        return this.serviceTypeOne.middle;
      }
    },
    height: {
      set(height) {
        this.setUpdateServiceType({
          ...this.serviceTypeOne,
          height
        });
      },
      get() {
        return this.serviceTypeOne.height;
      }
    }
  },
  methods: {
    ...mapActions(["updateServiceType","getServiceType"]),
    ...mapMutations(["setUpdateServiceType", "setUpdateServiceTypeVis"]),
    update(id) {
      let shopId=this.shopId;
      let price = [
        { low: this.serviceTypeOne.low },
        { middle: this.serviceTypeOne.middle },
        { height: this.serviceTypeOne.height }
      ];
      let data = {
        name: this.serviceTypeOne.name,
        time: this.serviceTypeOne.time,
        price,id
      };
      this.updateServiceType(data);
      this.setUpdateServiceTypeVis(false);
      this.getServiceType({ page: 1, rows: 5, type: "", value: "", shopId });
    }
  },
  data() {
    return {
      formLabelWidth: "120px"
    };
  }
};
</script>

<style scoped>
.btn {
  text-align: center;
}
</style>
