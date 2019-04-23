<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="1"
      @current-change="page"
      :total="pagenation.maxpage"
      :current-page="pagenation.curpage"
    ></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("allServiceModule");
export default {
  computed: {
    ...mapState(["pagenation", "shopId", "searchRule"])
  },
  methods: {
    ...mapActions(["getServices"]),
    page(page) {
      let shopId = this.shopId;
      let type = this.searchRule.type || "";
      let value = this.searchRule.value || "";
      this.getServices({ page, type, value, shopId });
    }
  }
};
</script>

<style>
</style>
