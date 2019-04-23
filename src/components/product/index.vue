<template>
  <div>
    <ProAdd></ProAdd>
    <SearchPro></SearchPro>
    <ProList></ProList>
    <!-- <PagePro></PagePro> -->
    <!-- <UpdatePro></UpdatePro> -->
  </div>
</template>

<script>
import ProList from "./ProList";
import ProAdd from "./ProAdd";
// import UpdatePro from "./UpdatePro"
import SearchPro from "./SearchPro";
// import PagePro from "./PagePro";
export default {
  components: {
    ProList,
    ProAdd,
    // UpdatePro,
    SearchPro,
    // PagePro
  }
};
</script>

<style scoped>
</style>
