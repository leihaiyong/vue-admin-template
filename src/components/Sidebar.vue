<template>
  <tree-menu :menus="menus"/>
</template>

<script>
import TreeMenu from './TreeMenu'

export default {
  name: 'sidebar',
  components: {
      TreeMenu
  },
  props: ['menus']
}
</script>

<style scoped>
</style>
