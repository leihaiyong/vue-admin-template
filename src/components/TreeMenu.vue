<template>
    <el-menu :router=true :default-active="$route.path">
        <tree-menu-item v-for="menu in menus" :key="menu.index" :menu="menu" />
    </el-menu>
</template>

<script>
import TreeMenuItem from './TreeMenuItem'

export default {
  name: 'tree-menu',
  components: {
      TreeMenuItem
  },
  props: ['menus']
}
</script>

<style scoped>
.el-menu {
    height: 100%;
    text-align: left;
}
</style>
