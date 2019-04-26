<template>
  <div>
    <Add/>
    <Search/>
    <Update/>
    <List/>
    <Page/>
  </div>
</template>

<script>
import Add from "./Add";
import Page from "./Page";
import Search from "./Search";
import Update from "./Update";
import List from "./List";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shopManageCom");
const { mapMutations } = createNamespacedHelpers("allServiceModule");
export default {
  components: {
    Add,
    Update,
    Search,
    List,
    Page
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

<style>
</style>
