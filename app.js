App({
  onLaunch: function () {
    // 获取小程序更新机制兼容
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，立即体验吧~',
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate();
                }
              },
            });
          });
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            });
          });
        }
      });
    }
    this.getSystemInfoSync();
    let token = wx.getStorageSync('token');
    if (token) {
      this.token = token;
    }
  },
  getSystemInfoSync() {
    try {
      const res = wx.getSystemInfoSync();
      let version = parseInt(res.version.split('.').join('')); //微信版本
      let SDKVersion = parseInt(res.SDKVersion.split('.').join('')); //基础库版本
      if (version > 700 && SDKVersion > 243) {
        //是否展示自定义导航
        this.globalData.nav_custom = true;
        //计算导航栏高度
        let titleBarHeight = res.model.indexOf('iPhone') !== -1 ? 44 : 48;
        let isIphone = res.model.indexOf('iPhone') !== -1 ? true : false;
        let statusBarHeight = res.statusBarHeight || 20;
        this.globalData.nav_height =
          parseInt(titleBarHeight) + parseInt(statusBarHeight);
        this.globalData.statusBarHeight = statusBarHeight;
        this.globalData.isIphone = isIphone;
      }
      this.globalData.isIphoneX =
        res.model.indexOf('iPhone X') !== -1 ||
        res.model.indexOf('iPhone 1') !== -1
          ? true
          : false;
      this.globalData.windowHeight = res.windowHeight;
      this.globalData.windowWidth = res.windowWidth;
    } catch (err) {
      console.error('code error:', err);
    }
  },
  globalData: {
    statusBarHeight: 0,
    navHeight: 0,
    navCustom: false,
  },
});
