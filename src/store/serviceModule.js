import axios from "axios";
export default {
  namespaced: true,
  state: {
    serviceType: [],
    serviceTypeOne: {
      name: "",
      time: "",
      low: "",
      middle:"",
      height:"",
      id: "",
      visible: false
    },
    pagenation: {},
    searchRule: {
      type: "",
      value: ""
    },
    shopId: "5cbae16ce0d4c6dae46facd4"
  },
  mutations: {
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
    }
  },
  actions: {
    getServiceType({ commit }, rule = {}) {
      let shopId = rule.shopId;
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      axios({
        method: "get",
        url: "/service/getServiceType",
        params: { page, rows, type, value, shopId }
      }).then(res => {
        commit("setServiceType", res.data.rows);
        commit("setPagenation", res.data);
      });
    },
    deleteServiceType({ commit }, id) {
      axios({
        method: "delete",
        url: "/service/delete/" + id
      }).then(res => {});
    },
    addServiceType({ commit }, addMess) {
      axios({
        method: "post",
        url: "/service/add",
        data: addMess
      }).then(res => {});
    }
  }
};
