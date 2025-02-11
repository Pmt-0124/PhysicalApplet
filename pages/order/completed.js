Page({
  data: {
    completedOrders: [
      {
        id: "20230801001",
        price: 99.9,
        time: "2023-08-01 14:30"
      },
      {
        id: "20230801002",
        price: 149.9,
        time: "2023-08-01 16:45"
      }
    ]
  },

  // 查看订单详情
  viewDetail(e) {
    const orderId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/order/detail/detail?id=${orderId}`
    });
  },

  // 再次购买
  buyAgain(e) {
    const orderId = e.currentTarget.dataset.id;
    wx.showToast({
      title: `再次购买订单 ${orderId}`,
      icon: 'none'
    });
    // 实际开发中调用接口
  }
});