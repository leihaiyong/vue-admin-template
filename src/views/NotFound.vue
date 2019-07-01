<template>
  <el-row type="flex" align="middle" justify="center">
    <el-col :span="12">
      <h2>Oops!</h2>
      <h4>The page you requested was <em>not found</em>.</h4>
      <router-link to="/">
        Back to home
      </router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'not_found'
}
</script>

<style scoped>
.el-row {
  height: 100%;
}
</style>
