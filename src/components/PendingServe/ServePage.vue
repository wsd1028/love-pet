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
    ...mapActions(["getServes"]),
    page(page) {
      let type = this.searchRule.type || "";
      let value = this.searchRule.value || "";
      this.getServes({ page, type, value });
    }
  }
};
</script>

<style scoped>
</style>
