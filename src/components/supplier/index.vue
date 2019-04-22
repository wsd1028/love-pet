<template>
  <div>
    <h1>供应商管理</h1>
    <supAdd></supAdd>
    <supSearch></supSearch>
    <supUpdate></supUpdate>
    <supList></supList>
  </div>
</template>

<script>
import supList from "./supList";
import supSearch from "./supSearch";
import supAdd from "./supAdd";
import supUpdate from "./supUpdate"

export default {
  components: {
    supList,
    supAdd,
    supSearch,
    supUpdate
  }
};
</script>

<style scoped>
</style>
