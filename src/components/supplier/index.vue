<template>
  <div>
    <h1>供应商管理</h1>
    <supAdd></supAdd>
    <supSearch></supSearch>
    <supUpdate></supUpdate>
    <supList></supList>
    <supPage></supPage>
    
  </div>
</template>

<script>
import supList from "./supList";
import supSearch from "./supSearch";
import supAdd from "./supAdd";
import supUpdate from "./supUpdate";
import supPage from "./supPage"

export default {
  components: {
    supList,
    supAdd,
    supSearch,
    supUpdate,
    supPage,
  }
};
</script>

<style scoped>
</style>
