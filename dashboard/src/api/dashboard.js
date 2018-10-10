import axios from 'axios'
import { envConst } from '@/config/index'
import Qs from 'qs'

export default {
  login: data =>
    axios.post(envConst.API_BASE + '/login', data, {
      transformRequest: function(data) {
        return Qs.stringify(data)
      }
    }),
  checkPermission: () => axios.get(envConst.API_BASE + '/user/permissions')
}
