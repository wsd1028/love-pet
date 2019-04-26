import axios from "axios";
export default {
  namespaced: true,
  state: {
    trades: [],
    serves: [],
    searchRule: {
      type: "",
      value: ""
    },
    pagenation: {},
    shopId: ""
  },
  mutations: {
    setPagenation(state, pagenation) {
      state.pagenation = pagenation;
    },
    setTrades(state, trades) {
      state.trades = trades;
    },
    setServes(state, serves) {
      state.serves = serves;
    },
    setSearchRule(state, searchRule) {
      state.searchRule = searchRule;
    },
    setShopId(state, shopId) {
      state.shopId = shopId;
    }
  },
  actions: {
    getTrades({ commit }, rule = {}) {
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      let trade = rule.trade;
      let id = rule.id;
      axios({
        method: "get",
        url: "/order/commodity",
        params: { page, rows, type, value, trade, id }
      }).then(res => {
        for (let i = 0; i < res.data.rows.length; i++) {
          if (res.data.rows[i].status == "0") {
            res.data.rows[i].status = "未发货";
          } else if (res.data.rows[i].status == "2") {
            res.data.rows[i].status = "待收货";
          }
        }
        commit("setTrades", res.data.rows);
        commit("setPagenation", res.data);
      });
    },
    getServes({ commit }, rule = {}) {
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      let serve = rule.serve;
      let id = rule.id;
      axios({
        method: "get",
        url: "/order/serve",
        params: { page, rows, type, value, serve, id }
      }).then(res => {
        commit("setServes", res.data.rows);
        commit("setPagenation", res.data);
      });
    }
  }
};
