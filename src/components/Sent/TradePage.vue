<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="1"
      :total="pagenation.maxpage"
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
    ...mapState(["pagenation", "searchRule"])
  },
  methods: {
    ...mapActions(["getTrades"]),
    page(page) {
      let type = this.searchRule.type || "";
      let value = this.searchRule.value || "";
      let trade = "sent";
      this.getTrades({ page, type, value,trade });
    }
  }
};
</script>

<style scoped>
</style>
