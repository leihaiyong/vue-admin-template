<template>
    <el-submenu v-if="menu.children" :index="menu.index">
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ menu.label }}</span>
        </template>
        <menu-item v-for="menu in menu.children" :key="menu.index" :menu="menu" />
    </el-submenu>
    <el-menu-item v-else :index="menu.index">{{ menu.label }}</el-menu-item>
</template>

<script>
export default {
  name: 'menu-item',
  props: ['menu']
}
</script>

<style scoped>
</style>
