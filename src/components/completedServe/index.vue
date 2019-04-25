<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <CompletedServeSearch/>
    </div>
    <CompletedServeList/>
    <CompletedServePage/>
  </el-card>
</template>

<script>
import CompletedServeSearch from "./CompletedServeSearch";
import CompletedServeList from './CompletedServeList'
import CompletedServePage from './CompletedServePage'
export default {
  components: {
    CompletedServeSearch,
    CompletedServeList,
    CompletedServePage
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