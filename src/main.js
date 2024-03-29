import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App.vue'
import router from '@/route/router'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
