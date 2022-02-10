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
    path: '/login',
    component: RouteView,
    children: [
      {
        path: "/login",
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
    path: '/',
    component: () => import('@/layouts/BasicLayout'),
    children: [
      {
        path: "/",
        redirect: "/model/index"
      },
      {
        path: "/overview/index",
        name: "OverviewIndex",
        component: () => import("@/views/overview/Index"),
      },
      {
        path: "/model/index",
        name: "ModelIndex",
        component: () => import("@/views/model/Index"),
        children: [
          {
            path: "/model/ModelList",
            name: "ModelList",
            component: () => import("@/views/model/ModelList")
          },
          {
            path: "/model/ModelTree",
            name: "ModelTree",
            component: () => import("@/views/model/ModelTree")
          }
        ]
      },
      {
        path: "/simulation/index",
        name: "SimulationIndex",
        component: () => import("@/views/simulation/Index"),
      },
      {
        path: "/report/index",
        name: "ReportIndex",
        component: () => import("@/views/report/Index"),
      },
      {
        path: "/resource/index",
        name: "ResourceIndex",
        component: () => import("@/views/resource/Index"),
      },
    ]
  }
]
