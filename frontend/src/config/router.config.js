/**
 * 基础路由
 * @type { *[] }
 */

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const constantRouterMap = [
  // 登录页
  {
    path: '/',
    component: RouteView,
    children: [
      {
        path: "/",
        redirect: "/login/login-index"
      },
      {
        path: "/login/login-index",
        name: "LoginIndex",
        component: () => import("@/views/login/LoginIndex")
      },
      {
        path: "/login/project",
        component: () => import('@/layouts/ProjectLayout'),
        children: [
          {
            path: "/login/project/history-index",
            name: "HistoryIndex",
            component: () => import("@/views/login/project/HistoryIndex"),
          },
          {
            path: "/login/project/new-index",
            name: "NewIndex",
            component: () => import("@/views/login/project/NewIndex"),
          },
        ]
      }
    ]
  },
  // 主界面
  {
    path: '/main',
    component: () => import('@/layouts/BasicLayout'),
    children: [
      {
        path: "/main",
        redirect: "/main/model/index"
      },
      {
        path: "/main/overview/index",
        name: "OverviewIndex",
        component: () => import("@/views/main/overview/Index"),
      },
      {
        path: "/main/model/index",
        name: "ModelIndex",
        component: () => import("@/views/main/model/Index"),
        children: [
          {
            path: "/main/model/ModelListIndex",
            name: "ModelListIndex",
            component: () => import("@/views/main/model/ModelListIndex")
          },
          {
            path: "/main/model/ModelTreeIndex",
            name: "ModelTreeIndex",
            component: () => import("@/views/main/model/ModelTreeIndex")
          }
        ]
      },
      {
        path: "/main/simulation/index",
        name: "SimulationIndex",
        component: () => import("@/views/main/simulation/Index"),
      },
      {
        path: "/main/assessment/index",
        name: "AssessmentIndex",
        component: () => import("@/views/main/assessment/Index"),
      },
      {
        path: "/main/resource/index",
        name: "ResourceIndex",
        component: () => import("@/views/main/resource/Index"),
      },
    ]
  }
]
