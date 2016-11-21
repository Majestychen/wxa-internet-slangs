var app = getApp()

Page({
  data: {
    length: Object.keys(app.globalData.api.data).length
  },
  // 监听页面加载
  onLoad () {
    console.log('About Page: onLoad.')
  },
  // 监听页面初次渲染完成
  onReady () {
    console.log('About Page: onReady.')
  },
  // 监听页面显示
  onShow () {
    console.log('About Page: onShow.')
  },
  // 监听页面隐藏
  onHide () {
    console.log('About Page: onHide.')
  },
  // 监听页面卸载
  onUnload () {
    console.log('About Page: onUnload.')
  },
  // 监听用户下拉刷新动作
  onPullDownRefresh () {
    console.info('About Page: onPullDownRefresh.')
  }
})
