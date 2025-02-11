Page({
  data: {
    orderType: null,  // 存储订单类型
    pendingOrders: [] // 订单数据
  },

  // 页面加载时接收参数
  onLoad(options) {
    const type = options.type; // 获取URL中的type参数
    this.setData({ orderType: type });
    this.loadOrders(type);     // 根据类型加载数据
  },

  // 模拟加载订单数据
  loadOrders(type) {
    // 实际开发中需调用接口，此处用假数据演示
    const orders = [
      { id: "20230801001", price: 99.9, type: 1 },
      { id: "20230801002", price: 149.9, type: 1 }
    ];
    this.setData({ pendingOrders: orders });
  }
});