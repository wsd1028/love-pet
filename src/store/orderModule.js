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
    pagenation: {}
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
    }
  },
  actions: {
    getTrades({ commit }, rule = {}) {
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      let trade = rule.trade;
      axios({
        method: "get",
        url: "/order/commodity",
        params: { page, rows, type, value, trade }
      }).then(res => {
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
      axios({
        method: "get",
        url: "/order/serve",
        params: { page, rows, type, value, serve }
      }).then(res => {
        commit("setServes", res.data.rows);
        commit("setPagenation", res.data);
      });
    }
  }
};
