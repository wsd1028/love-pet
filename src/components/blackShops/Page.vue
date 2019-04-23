<template>
  <div class="page">
    <el-pagination background layout="prev, pager, next" :page-size="1" :total="pagination.maxpage"  @current-change="page" :current-page="pagination.curpage"></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");
export default {
  computed: {
    ...mapState(["pagination", "searchShop"])
  },
  methods: {
    ...mapActions(["getSshops"]),
    page(page) {
      let type = this.searchShop.type || "";
      let value = this.searchShop.value || "";
      this.getShops({ page, type, value });
    }
  }
};
</script>

<style scoped>
.page{
  margin-top:30px 
}
</style>
