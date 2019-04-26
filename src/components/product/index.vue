<template>
  <div>
    <ProAdd></ProAdd>
    <SearchPro></SearchPro>
    <ProList></ProList>
    <PagePro></PagePro>
    <UpdatePro></UpdatePro>
  </div>
</template>

<script>
import ProList from "./ProList";
import ProAdd from "./ProAdd";
import UpdatePro from "./UpdatePro"
import SearchPro from "./SearchPro";
import PagePro from "./PagePro";

import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("shopManageCom");
const { mapMutations } = createNamespacedHelpers("ProModule");
export default {
  components: {
    ProList,
    ProAdd,
    UpdatePro,
    SearchPro,
    PagePro
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

<style scoped>
</style>
