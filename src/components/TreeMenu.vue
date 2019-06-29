<template>
    <el-menu :router=true :default-active="$route.path">
        <menu-item v-for="menu in menus" :key="menu.index" :menu="menu" />
    </el-menu>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'tree-menu',
  components: {
      MenuItem
  },
  computed: {
      menus() {
        let menus = []
        for (let route of this.$router.options.routes) {
            if (route.meta && route.meta.main_menu) {
                for (let subroute of route.children) {
                    if (subroute.meta && subroute.meta.menu_label) {
                        let menu = this.makeMenu(subroute, route.path)
                        menus.push(menu)
                    }
                }
                break
            }
        }
        //console.log(menus)
        return menus
      }
  },
  methods: {
      makeMenu(route, parentIndex) {
          let menu = {
              label: route.meta.menu_label,
          }

          if (parentIndex === '/') {
              menu.index = parentIndex + route.path
          } else {
              menu.index = parentIndex + '/' + route.path
          }

          if (route.children) {
            let children = []
            for (let subroute of route.children) {
                if (subroute.meta && subroute.meta.menu_label) {
                    let submenu = this.makeMenu(subroute, menu.index)
                    children.push(submenu);
                }
            }
            if (children.length) {
                menu.children = children
            }
          }

          return menu
      }
  }
}
</script>

<style scoped>
.el-menu {
    height: 100%;
    text-align: left;
}
</style>
