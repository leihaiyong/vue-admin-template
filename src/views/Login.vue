<template>
  <el-row type="flex" align="middle">
    <el-col :offset="8" :span="8">
      <el-form ref="form" :model="form" label-width="80px">
        <h2 style="margin-left: 80px;">Welcome</h2>
        <el-form-item label="Username:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Password:" :error="form.error">
          <el-input v-model="form.pwd" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">Login</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      form: {
        name: '',
        pwd: '',
        error: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async onLogin() {
      try {
        await this.login(this.form.name, this.form.pwd)
        this.$router.push('/')
      } catch(err) {
        this.form.error = 'User not existed or bad password.'
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.el-row {
  height: 100%;
}
</style>
