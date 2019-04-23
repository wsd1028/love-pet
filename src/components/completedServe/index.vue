<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <CompletedServeSearch/>
    </div>
    <CompletedServeList/>
  </el-card>
</template>

<script>
import CompletedServeSearch from "./CompletedServeSearch";
import CompletedServeList from './CompletedServeList'
export default {
  components: {
    CompletedServeSearch,
    CompletedServeList
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