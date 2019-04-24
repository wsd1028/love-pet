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


export default {
 components: {
    Add,
    Update,
    Search,
    List,
    Page
  },
}
</script>

<style>

</style>
