<template>
  <div>
    <SearchSysUser></SearchSysUser>
    <UserList></UserList>
    <Page></Page>
    <UpdateSysUser></UpdateSysUser>
  </div>
</template>
<script>
import UserList from "./UserList";
import Page from "./Page";
import SearchSysUser from "./SearchSysUser";
import UpdateSysUser from "./UpdateSysUser";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("shopManagerModule");
export default {
  components: { UserList, Page, SearchSysUser, UpdateSysUser },
  created() {
    // this.show();
    this.setshopManagers();
  },
  data() {
    return {
      shopManagers: [],
      oneShopManager: {},
      pagation: {}
    };
  },
  methods: {
    ...mapActions(["setshopManagers"]),
    setoneShopManager(oneUser) {
      this.oneShopManager = oneShopManager;
    }
  }
};
</script>


<style scoped>
</style>


