<template>
  <el-container>
    <el-header>
      <navbar />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar :menus="menus" />
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
              this.buildTreeMenu(menus, route, 0, 2)
            }
          }
        }
        //console.log(menus)
        return menus
      }
  },
  methods: {
      buildTreeMenu(menus, cur_route, cur_level, max_level) {
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
                  this.buildTreeMenu(sub_menus, route, cur_level + 1, max_level)
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
