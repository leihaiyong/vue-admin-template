<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
                <span style="display:block;" @click="onLogout">Logout</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navbar',
  methods: {
    ...mapActions([
          'logout'
      ]),
    onLogout() {
        console.log('logout')
        this.logout()
        this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-dropdown {
    float: right;
    margin-top: 10px;
}
</style>