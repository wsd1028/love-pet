<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <CompletedServeSearch/>
    </div>
    <CompletedServeList/>
    <CompletedServePage/>
  </el-card>
</template>

<script>
import CompletedServeSearch from "./CompletedServeSearch";
import CompletedServeList from "./CompletedServeList";
import CompletedServePage from "./CompletedServePage";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shopManageCom");
const { mapMutations } = createNamespacedHelpers("orderModule");
export default {
  components: {
    CompletedServeSearch,
    CompletedServeList,
    CompletedServePage
  },
  created() {
    let shopId = this.shopId;
    this.setShopId(shopId);
  },
  computed: {
    ...mapState(["shopId"])
  },
  methods: {
    ...mapMutations(["setShopId"])
  }
};
</script>
<style scoped>
</style>