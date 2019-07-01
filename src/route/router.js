import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Panel from '@/components/Panel'
import NotFound from '@/views/NotFound'
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
      name: 'main',
      meta: { main: true, label: 'Home' },
      redirect: '/app',
      component: Layout,
      children: [
        {
          path: 'app',
          name: 'app',
          meta: { label: 'App' },
          redirect: '/app/page1',
          component: Panel,
          children: [
            {
              path: 'page1',
              name: 'app.page1',
              meta: { label: 'App 1' },
              component: PlaceholdPage
            },
            {
              path: 'page2',
              name: 'app.page2',
              meta: { label: 'App 2' },
              component: PlaceholdPage
            }
          ]
        },
        {
          path: 'misc',
          name: 'misc',
          meta: { label: 'Misc' },
          redirect: '/misc/page1',
          component: Panel,
          children: [
            {
              path: 'page1',
              name: 'misc.page1',
              meta: { label: 'Misc 1' },
              component: PlaceholdPage
            },
            {
              path: 'page2',
              name: 'misc.page2',
              meta: { label: 'Misc 2' },
              component: PlaceholdPage
            }
          ]
        }
      ]
    },
    {
      path: '*',
      component: NotFound
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
    // not yet login
    next('/login')
  }
})

export default router
