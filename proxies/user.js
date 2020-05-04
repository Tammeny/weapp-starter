/**
 * 用户模块接口
 */

import Request from '../utils/request.js';
import Config from '../utils/config.js';
const baseUrl = Config.selfAPI;

// 登录
export function ProxyLogin(data = {}) {
  return Request({
    url: `${baseUrl}/auth/login`,
    method: 'post',
    data,
    isLogin: true
  })
}

// 退出登录
export function ProxyLogout(data = {}) {
  return Request({
    url: `${baseUrl}/auth/logout`,
    method: 'post',
    data
  })
}
