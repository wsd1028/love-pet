<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pagenation.eachpage"
      :total="pagenation.total"
      @current-change="page"
      :current-page="pagenation.curpage"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("orderModule");
export default {
  computed: {
    ...mapState(["pagenation", "searchRule", "shopId"])
  },
  methods: {
    ...mapActions(["getTrades"]),
    page(page) {
      let type = this.searchRule.type || "";
      let value = this.searchRule.value || "";
      let trade = "sent";
      let id = this.shopId;
      this.getTrades({ page, type, value, trade, id });
    }
  }
};
</script>

<style scoped>
</style>
