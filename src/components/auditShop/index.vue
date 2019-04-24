<template>
  <div class="body">
    <header>
      <el-steps :active="2">
        <el-step title="步骤 1" description="门店信息登记"></el-step>
        <el-step title="步骤 2" description="正在审核中..."></el-step>
        <el-step title="步骤 3" description="审核完成！"></el-step>
      </el-steps>
      <div >您的门店正在审核中...</div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  padding: 30px 200px;
}
</style>
