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
const { mapActions, mapState } = createNamespacedHelpers("serviceModule");
export default {
  computed: {
    ...mapState(["pagenation", "shopId", "searchRule"])
  },
  methods: {
    ...mapActions(["getServiceType"]),
    page(page) {
      let shopId = this.shopId;
      let type = this.searchRule.type || "";
      let value = this.searchRule.value || "";
      this.getServiceType({ page, type, value, shopId });
    }
  }
};
</script>

<style>
</style>
