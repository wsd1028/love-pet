import axios from "axios";
export default {
  namespaced: true,
  state: {
    services: [],
    waiter: [],
    serviceType: [],
    pagenation: {},
    searchRule: {
      type: "",
      value: ""
    },
    shopId: "5cbae16ce0d4c6dae46facd4"
  },
  mutations: {
    setServices(state, services) {
      state.services = services;
    },
    setServiceType(state, serviceType) {
      state.serviceType = serviceType;
    },
    setPagenation(state, pagenation) {
      state.pagenation = pagenation;
    },
    setShopId(state, setShopId) {
      state.setShopId = setShopId;
    },
    setSearchRule(state, searchRule) {
      state.searchRule = searchRule;
    },
    setWaiter(state, waiter) {
      state.waiter = waiter;
    }
  },
  actions: {
    getServiceType({ commit }, rule = {}) {
      let shopId = rule.shopId;
      axios({
        method: "get",
        url: "/service/getServiceType",
        params: { shopId }
      }).then(res => {
        commit("setServiceType", res.data);
      });
    },
    getServices({ commit }, rule = {}) {
      let shopId = rule.shopId;
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      axios({
        method: "get",
        url: "/service/getServices",
        params: { page, rows, type, value, shopId }
      }).then(res => {
        commit("setServices", res.data.rows);
        commit("setPagenation", res.data);
      });
    },
    deleteServices({ commit }, id) {
      axios({
        method: "delete",
        url: "/service/deleteServices/" + id
      }).then(res => {});
    },
    addServices({ commit }, addMess) {
      axios({
        method: "post",
        url: "/service/addServices",
        data: addMess
      }).then(res => {});
    },
    getWaiter({ commit }, id) {
      axios({
        method: "get",
        url: "/service/getWaiter/" + id
      }).then(res => {
        commit("setWaiter", res.data);
      });
    }
  }
};
