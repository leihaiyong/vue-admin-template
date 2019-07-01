<template>
  <el-container>
    <el-header>
      <navbar />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar />
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
</style>
