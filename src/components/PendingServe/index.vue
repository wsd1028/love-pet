<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <PendingServeSearch/>
    </div>
    <PendingServeList/>
    <PendingServePage/>
  </el-card>
</template>

<script>
import PendingServeSearch from "./PendingServeSearch";
import PendingServeList from "./PendingServeList";
import PendingServePage from "./PendingServePage";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shopManageCom");
const { mapMutations } = createNamespacedHelpers("orderModule");
export default {
  components: {
    PendingServeSearch,
    PendingServeList,
    PendingServePage
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