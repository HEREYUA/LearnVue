import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    name: 'login',
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    icons: 'el-icon-platform-eleme',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/datas',
        name: '数据管理',
        icons: 'el-icon-platform-eleme',
        component: () => import('../views/dataManage/DataManage.vue'),
        children: [
          {
            path: '/showdata',
            name: '数据展示',
            component: () => import('../views/dataManage/Data.vue')
          },
          {
            path: '/adddata',
            name: '数据添加',
            component: () => import('../views/dataManage/DataAdd.vue')
          }
        ]
      },
      {
        path: '/user',
        name: '用户管理',
        icons: 'el-icon-platform-eleme',
        component: () => import('../views/userManage/User.vue')
      },
      {
        path: '/seeting',
        name: '设置',
        icons: 'el-icon-platform-eleme',
        component: () => import('../views/seetings/Seeting.vue')
      },
      {
        path: '/tools',
        name: '工具',
        icons: 'el-icon-platform-eleme',
        component: () => import('../views/tools/Tool.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
