<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <SentSearch/>
    </div>
    <SentList/>
    <SentPage/>
  </el-card>
</template>

<script>
import SentSearch from "./SentSearch";
import SentList from "./SentList";
import SentPage from "./SentPage";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shopManageCom");
const { mapMutations } = createNamespacedHelpers("orderModule");
export default {
  components: {
    SentSearch,
    SentList,
    SentPage
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