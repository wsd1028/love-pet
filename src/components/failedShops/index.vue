<template>
  <div>
    <SearchFailed/>
    <FailedList/>
    <Page/>
  </div>
</template>

<script>
import FailedList from "./FailedList.vue";
import SearchFailed from './SearchFailed.vue';
import Page from './Page.vue'
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");

export default {
  components: {
    FailedList,
    SearchFailed,
    Page
  },
  computed: {
    ...mapState(["shops"])
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
