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
    ...mapState(["pagenation", "searchRule","shopId"])
  },
  methods: {
    ...mapActions(["getServes"]),
    page(page) {
      let type = this.searchRule.type || "";
      let value = this.searchRule.value || "";
      let serve = "pending";
      let id = this.shopId;
      this.getServes({ page, type, value, serve,id });
    }
  }
};
</script>

<style scoped>
</style>
