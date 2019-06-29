import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Panel from '@/components/Panel'
import Login from '@/views/Login'
import PlaceholdPage from '@/views/PlaceholdPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      meta: { main_menu: true },
      redirect: '/app',
      component: Layout,
      children: [
        {
          path: 'app',
          meta: { menu_label: 'App' },
          redirect: '/app/page1',
          component: Panel,
          children: [
            {
              path: 'page1',
              meta: { menu_label: 'App 1' },
              component: PlaceholdPage
            },
            {
              path: 'page2',
              meta: { menu_label: 'App 2' },
              component: PlaceholdPage
            }
          ]
        },
        {
          path: 'misc',
          meta: { menu_label: 'Misc' },
          redirect: '/misc/page1',
          component: Panel,
          children: [
            {
              path: 'page1',
              meta: { menu_label: 'Misc 1' },
              component: PlaceholdPage
            },
            {
              path: 'page2',
              meta: { menu_label: 'Misc 2' },
              component: PlaceholdPage
            }
          ]
        }
      ]
    }
  ]
})

import store from '@/store/store'
import {getCachedUser} from '@/api/user'

router.beforeEach((to, from, next) => {
  console.log(`route: "${from.path}" -> "${to.path}"`)
  let user = store.state.user
  if (user == null) {
    user = getCachedUser()
    if (user) {
      // restore
      store.commit('SET_USER', user)
    }
  }
  if (user || to.path === "/login") {
    next()
  } else {
    next('/login')
  }
})

export default router
