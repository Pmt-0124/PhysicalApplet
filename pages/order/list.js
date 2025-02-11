Page({
  data: {
    activeFilter: 'all', // 当前选中的筛选类型
    orders: []           // 订单列表
  },

  onLoad(options) {
    // 根据传入的 type 参数初始化筛选状态
    const type = options.type || 'all';
    this.setData({ activeFilter: type });
    this.loadOrders(type);
  },

  // 切换筛选类型
  changeFilter(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ activeFilter: type });
    this.loadOrders(type);
  },

  // 加载订单数据
  loadOrders(type) {
    // 模拟数据，实际开发中需调用接口
    const allOrders = [
      { id: "20230801001", price: 99.9, status: "待付款" },
      { id: "20230801002", price: 149.9, status: "已完成" },
      { id: "20230801003", price: 199.9, status: "售后" }
    ];

    let orders = [];
    if (type === 'all') {
      orders = allOrders;
    } else {
      orders = allOrders.filter(order => order.status === this.getStatusText(type));
    }

    this.setData({ orders });
  },

  // 根据筛选类型获取状态文本
  getStatusText(type) {
    switch (type) {
      case 'pending':
        return '待付款';
      case 'completed':
        return '已完成';
      case 'after-sale':
        return '售后';
      default:
        return '';
    }
  },

  // 处理支付操作
  handlePay(e) {
    const orderId = e.currentTarget.dataset.id;
    wx.showToast({
      title: `支付订单 ${orderId}`,
      icon: 'none'
    });
    // 实际开发中调用支付接口
  },

  // 处理售后操作
  handleRefund(e) {
    const orderId = e.currentTarget.dataset.id;
    wx.showToast({
      title: `申请售后 ${orderId}`,
      icon: 'none'
    });
    // 实际开发中跳转售后页面
  }
});