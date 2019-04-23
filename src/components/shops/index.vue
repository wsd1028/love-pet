<template>
  <div>
    <SearchShop/>
    <ShopsList/>
    <Page/>
  </div>
</template>

<script>
import ShopsList from "./ShopsList.vue";
import SearchShop from './SearchShop.vue';
import Page from './Page.vue'
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");

export default {
  components: {
    ShopsList,
    SearchShop,
    Page
  },
  computed: {
    ...mapState(["shops"])
  },
  methods: {
  }
};
</script>

<style>
</style>
