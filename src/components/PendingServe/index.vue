<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <PendingServeSearch/>
    </div>
    <PendingServeList/>
    <PendingServePage/>
  </el-card>
</template>

<script>
import PendingServeSearch from "./PendingServeSearch";
import PendingServeList from './PendingServeList'
import PendingServePage from './PendingServePage'
export default {
  components: {
    PendingServeSearch,
    PendingServeList,
    PendingServePage
  },
  methods: {
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped>
</style>