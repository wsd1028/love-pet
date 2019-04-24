<template>
  <div>
    <SearchShop/>
    <AuditShops/>
    <Page/>
  </div>
</template>

<script>
import AuditShops from "./AuditShops.vue";
import SearchShop from './SearchShop.vue'
import Page from './Page.vue'
export default {
  components: {
    AuditShops,
    SearchShop,
    Page
  }
};
</script>

<style>
</style>
