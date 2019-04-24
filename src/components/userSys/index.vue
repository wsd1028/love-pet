<template>
  <div>
    <AddSysUser></AddSysUser>
    <SearchSysUser></SearchSysUser>
    <UserList></UserList>
    <Page></Page>
    <UpdateSysUser></UpdateSysUser>
  </div>
</template>
<script>
import AddSysUser from "./AddSysUser";
import UserList from "./UserList";
import Page from "./Page";
import SearchSysUser from "./SearchSysUser";
import UpdateSysUser from "./UpdateSysUser";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("userSysModule");
export default {
  components: { AddSysUser, UserList, Page, SearchSysUser,UpdateSysUser },
  created() {
    // this.show();
    this.setUserSys();
  },
  data() {
    return {
      userSys: [],
      oneUser: {},
      pagation: {}
    };
  },
  methods: {
    ...mapActions(["setUserSys"]),
    setOneUser(oneUser) {
      this.oneUser = oneUser;
    }
  }
};
</script>


<style scoped>
</style>


