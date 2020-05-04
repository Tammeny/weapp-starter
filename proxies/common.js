/**
 * 公用接口
 */

import Request from '../utils/request.js';
import Config from '../utils/config.js';
const baseUrl = Config.selfAPI;

// 上传base64图片
export function ProxyUploadBase64Image(data = {}) {
  return Request({
    url: `${baseUrl}/upload/base64`,
    method: 'post',
    data
  })
}