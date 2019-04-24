<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <PendingTradeSearch/>
    </div>
    <PendingTradeList/>
    <PendingTradePage/> 
  </el-card>

</template>

<script>
import PendingTradeSearch from "./PendingTradeSearch";
import PendingTradeList from './PendingTradeList';
import PendingTradePage from './PendingTradePage'
export default {
  components: {
    PendingTradeSearch,
    PendingTradeList,
    PendingTradePage
  },
  methods: {},
  data() {
    return {}
  }
};
</script>
<style scoped>
</style>