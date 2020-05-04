// 请求封装
const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.showNavigationBarLoading();
    const methonType =
      options.method.toUpperCase() == 'POST'
        ? 'application/x-www-form-urlencoded'
        : 'application/json';
    const token = wx.getStorageSync('token');
    if (token) {
      options.data.token = token;
    }
    const header = {
      'content-type': methonType,
    };
    wx.request({
      header,
      ...options,
      success: (res) => {
        resolve(res.data);
        if (res.data.code !== 200) {
          wx.showToast({
            title: res.data.message || '服务器异常',
            icon: 'none',
          });
          if (res.data.code === 401) {
            // 未登录或登录过期，跳转到登录页
            wx.redirectTo({
              url: '/pages/login/login',
            });
          }
          reject(res.data);
        }
      },
      fail: (res) => {
        reject(res.data);
        wx.showToast({
          title: '网络开小差,请稍后重试哦',
          icon: 'none',
        });
      },
      complete: () => {
        wx.hideNavigationBarLoading();
      },
    });
  });
};
export default request;
