<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="menu in menus" :key="menu.index" :to="{ path: menu.index }">
            {{ menu.label }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb_menu',
  props: { skipLevel: { type: Number, default: 0 }},
  computed: {
      menus() {
        let menus = this.$route.path.split("/")
          .reduce((res, path, idx) => {
            let menu = {
              label: this.$route.matched[idx].meta.label,
              index: idx > 1 ? res[idx - 1].index + '/' + path
                : '/' + path
            }
            res.push(menu)
            return res
          }, [])
          .slice(this.skipLevel)
        //console.log(menus)
        return menus
      }
  }
}
</script>

<style scoped>
</style>
