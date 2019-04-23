<template>
  <el-dialog title="修改服务" :visible.sync="service.visible">
    <el-form>
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="服务类型:" :label-width="formLabelWidth">
        <el-select v-model="serviceTypeName" placeholder="请选择服务类型">
          <el-option
            v-for="item in serviceType"
            :key="item._id"
            :lable="item._id"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开发时间段" :label-width="formLabelWidth">
        <el-input v-model="schedule" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="耗时" :label-width="formLabelWidth">
        <el-input v-model="useTime" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="价格" :label-width="formLabelWidth">
        <el-input v-model="price" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="服务人员:" :label-width="formLabelWidth">
        <el-select v-model="chooseWaiter" placeholder="请选择服务人员">
          <el-option v-for="item in waiter" :key="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="btn">
      <el-button @click="setUpdateServiceVis(false)">取 消</el-button>
      <el-button type="primary" @click="update(service.id)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "allServiceModule"
);
export default {
  computed: {
    ...mapState(["service", "shopId", "serviceType", "waiter","pagenation"]),
    name: {
      set(name) {
        this.setUpdateService({
          ...this.service,
          name
        });
      },
      get() {
        return this.service.name;
      }
    },
    serviceTypeName: {
      set(serviceTypeName) {
        this.service.serviceType.name = serviceTypeName;
      },
      get() {
        return this.service.serviceType.name;
      }
    },
    schedule: {
      set(schedule) {
        this.setUpdateService({
          ...this.service,
          schedule
        });
      },
      get() {
        return this.service.schedule;
      }
    },
    useTime: {
      set(useTime) {
        this.setUpdateService({
          ...this.service,
          useTime
        });
      },
      get() {
        return this.service.useTime;
      }
    },
    price: {
      set(price) {
        this.setUpdateService({
          ...this.service,
          price
        });
      },
      get() {
        return this.service.price;
      }
    },
    chooseWaiter: {
      set(chooseWaiter) {
        this.setUpdateService({
          ...this.service,
          waiter: chooseWaiter
        });
      },
      get() {
        return this.service.waiter;
      }
    }
  },
  data() {
    return {
      serviceTypeId: ""
    };
  },
  methods: {
    ...mapActions(["getServices", "getServiceType", "getWaiter","updateService"]),
    ...mapMutations(["setUpdateService", "setUpdateServiceVis"]),
    update(id) {
      let shopId = this.shopId;
      for (let i = 0; i < this.serviceType.length; i++) {
        if (this.service.serviceType.name == this.serviceType[i].name) {
          this.serviceTypeId = this.serviceType[i]._id;
        }
      }
    let data={...this.service,serviceTypeId:this.serviceTypeId}
        this.updateService(data);
        this.setUpdateServiceVis(false);
        this.getServices({ page: this.pagenation.curpage, shopId });
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
