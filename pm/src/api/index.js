/**
 * 模块所有API定义
 */
import axios from 'axios'
import { env } from '@/config/index'

export default {
  getSomething: () => axios.get(env.API_BASE + 'get.json')
}
