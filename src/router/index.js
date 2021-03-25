import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import { TokenService } from '../services/storage.service'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, _from, next) => {
    const loggedIn = !!TokenService.logged()
    const isPublic = to.matched.some(record => record.meta.public)

    if (!isPublic && !loggedIn) {
      return next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }

    if (loggedIn && to.path === '/') {
      return next({
        path: '/message'
      })
    }

    next()
  })

  return Router
}
