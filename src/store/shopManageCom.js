export default {
  namespaced: true,
  state: {
    shopId: ""
  },
  mutations: {
    setShopId(state, shopId) {
      state.shopId = shopId;
    }
  }
};
