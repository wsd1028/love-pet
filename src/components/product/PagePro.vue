<template>
  <div>
    <el-pagination background layout="prev, pager, next"
     :page-size="1" :total="pagenation.maxpage"
       @current-change="page" 
       :current-page="pagenation.curpage"></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("ProModule");
export default {
  computed: {
    ...mapState(["pagenation", "searchRule","shopId"])
  },
  methods: {
    ...mapActions(["getProducts"]),
    page(page) {
      let shopId=this.shopId;
      let type = this.searchRule.type || "";
      let value = this.searchRule.value || "";
      this.getProducts({ page, type, value,shopId });
    }
  }
};
</script>

<style scoped>
</style>