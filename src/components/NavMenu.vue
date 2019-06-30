<template>
    <el-menu :router=true :default-active="$route.path">
        <nav-menu-item v-for="menu in menus" :key="menu.index" :menu="menu" />
    </el-menu>
</template>

<script>
import NavMenuItem from './NavMenuItem'

export default {
  name: 'nav-menu',
  components: {
      NavMenuItem
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
