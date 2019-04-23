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


export default {
 components: {
    AddServiceType,
    Update,
    Search,
    ServiceTypeList,
    Page
  },
}
</script>

<style>

</style>
