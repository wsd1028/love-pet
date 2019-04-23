<template>
  <div class="page">
    <el-pagination background layout="prev, pager, next" :page-size="1" :total="paginationBlack.maxpage"  @current-change="page" :current-page="paginationBlack.curpage"></el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");
export default {
  computed: {
    ...mapState(["paginationBlack", "searchShop"])
  },
  methods: {
    ...mapActions(["getShops"]),
    page(page) {
      let type = this.searchShop.type || "";
      let value = this.searchShop.value || "";
      this.getShops({status:"no", page, type, value });
    }
  }
};
</script>

<style scoped>
.page{
  margin-top:30px 
}
</style>
