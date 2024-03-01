import type { RouteType } from '~/types/router'

const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Demo',
  path: '/',
  component: Layout,
  redirect: '/table',
  meta: {
    title: '示例页面',
    customIcon: 'logo',
    role: ['admin'],
    requireAuth: true,
    order: 1,
  },
  children: [
    {
      name: 'Table',
      path: 'table',
      component: () => import('@/views/home/table/index.vue'),
      meta: {
        title: '表格',
        icon: 'mdi:table',
        role: ['admin'],
        requireAuth: true,
      },
    },
  ],
} as RouteType
