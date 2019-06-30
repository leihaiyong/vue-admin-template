<template>
    <nav-menu :menus="menus"/>
</template>

<script>
import NavMenu from './NavMenu'

export default {
  name: 'sidebar',
  components: {
      NavMenu
  },
  computed: {
      menus() {
        let main_route = null;
        for (let route of this.$router.options.routes) {
          if (route.meta && route.meta.main) {
            main_route = route;
            break
          }
        }
        let menus = []
        if (main_route) {
          for (let route of main_route.children) {
            if (route.meta && route.meta.label) {
              this.makeMenu(menus, route, 0, 2)
            }
          }
        }
        //console.log(menus)
        return menus
      }
  },
  methods: {
      makeMenu(menus, cur_route, cur_level, max_level) {
        if (cur_level >= max_level) {
          return
        }

        let { resolved: { fullPath } } = this.$router.resolve({ name: cur_route.name })

        let menu = {
          label: cur_route.meta.label,
          index: fullPath
        }

        if (cur_route.children) {
          let sub_menus = []
          for (let route of cur_route.children) {
              if (route.meta && route.meta.label) {
                  this.makeMenu(sub_menus, route, cur_level + 1, max_level)
              }
          }
          if (sub_menus.length) {
              menu.children = sub_menus
          }
        }

        menus.push(menu)
      }
  }
}
</script>

<style scoped>
</style>
