<template>
  <el-card class="box-card">
   <div slot="header" class="clearfix">
      <SentSearch/>
    </div>
    <SentList/>
    <SentPage/>
  </el-card>
</template>

<script>
import SentSearch from "./SentSearch";
import SentList from './SentList';
import SentPage from './SentPage'
export default {
  components: {
    SentSearch,
    SentList,
    SentPage
  },
  methods: {},
  data() {
    return {}
  }
};
</script>
<style scoped>
</style>