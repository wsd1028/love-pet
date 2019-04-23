<template>
  <div>
    <SearchBlackShop/>
    <ShopsBlackList/>
    <Page/>
  </div>
</template>

<script>
import ShopsBlackList from "./ShopsBlackList.vue";
import SearchBlackShop from './SearchBlackShop.vue'
import Page from './Page.vue'
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");

export default {
  components: {
    ShopsBlackList,
    SearchBlackShop,
    Page
  },
  computed: {
    ...mapState(["shops"])
  },
  methods: {
    // ...mapActions(["getStudents"])
  }
};
</script>

<style>
</style>
