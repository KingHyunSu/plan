import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    name: 'Layout',
    component: () => import('@/components/Layout.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/view/Login.vue')
      },
      {
        path: '/main',
        name: 'Main',
        component: () => import('@/view/Main.vue')
      },
      {
        path: '/todo',
        name: 'Todo',
        component: () => import('@/view/Todo.vue')
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('@/view/Calendar.vue')
      },
      {
        path: '/planner',
        name: 'Planner',
        component: () => import('@/view/Planner.vue')
      }
    ]
  }
]
const createRouter = () =>
  new Router({
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
    routes: constantRouterMap
  })

const router = createRouter()

export default router
