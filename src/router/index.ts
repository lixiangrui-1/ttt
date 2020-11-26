import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ref',
    component: Home
  },
  {
    path: '/about',
    name: '声明周期',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/A',
    name: '拓展',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "A" */ '../views/A1.vue'),
    children: [
      {
        path: '/A/B',
        name: 'AB',
        component: () => import(/* webpackChunkName: "AB" */ '../views/A2.vue')
      },
      {
        path: '/A/C',
        name: 'AC',
        component: () => import(/* webpackChunkName: "AC" */ '../views/A3.vue')
      }
    ]

  },
  {
    path: '/666',
    component: () => import('../views/V1.vue')
  },
  {
    path: '/777',
    component: () => import('../views/V2.vue')
  },
  {
    path: '/888',
    component: () => import('../views/V3.vue')
  },
  {
    path: '/999',
    component: () => import('../views/V4.vue')
  },
  {
    path: '/000',
    component: () => import('../views/V5.vue')
  },
  {
    path: '/111',
    component: () => import('../components/list.vue')
  },
  {
    path: '/123/:id',
    component: () => import('../views/V5.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
