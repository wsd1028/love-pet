<template>
  <div>
    <AddServiceType/>
    <Search/>
    <Update/>
    <ServiceTypeList/>
    <Page/>
  </div>
</template>

<script>
import AddServiceType from "./AddServiceType";
import Page from "./Page";
import Search from "./Search";
import Update from "./Update";
import ServiceTypeList from "./ServiceTypeList";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shopManageCom");
const { mapMutations } = createNamespacedHelpers("serviceModule");
export default {
  components: {
    AddServiceType,
    Update,
    Search,
    ServiceTypeList,
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
