<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <PendingTradeSearch/>
    </div>
    <PendingTradeList/>
    <PendingTradePage/>
  </el-card>
</template>

<script>
import PendingTradeSearch from "./PendingTradeSearch";
import PendingTradeList from "./PendingTradeList";
import PendingTradePage from "./PendingTradePage";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shopManageCom");
const { mapMutations } = createNamespacedHelpers("orderModule");
export default {
  components: {
    PendingTradeSearch,
    PendingTradeList,
    PendingTradePage
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