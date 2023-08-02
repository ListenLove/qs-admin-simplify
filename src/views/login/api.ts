import { post } from '@/utils'

export default {
  login: (data = {}) => post<{
    token: string
  }>({
    url: '/auth/login',
    data,
    noNeedToken: true,
  }),
}
