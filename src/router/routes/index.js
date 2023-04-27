export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },

  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },

  {
    name: 'Dashboard',
    path: '/',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'Dashboard',
    },
  },

  {
    name: 'TestUnocss',
    path: '/test/unocss',
    component: () => import('@/views/test-page/unocss/index.vue'),
    meta: {
      title: '测试unocss',
    },
  },
]
