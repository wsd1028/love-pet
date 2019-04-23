import axios from "axios";
export default {
  namespaced: true,
  state: {
    shops: [],
    sudit:[],
    blackList:[],
    searchShop: {
      type: "",
      value: ""
    },
    pagination: {}

  },
  mutations: {
    setShops(state, shops) {
      state.shops = shops;
    },
    setAudit(state,audit){
        state.audit=audit;
    },
    setPagination(state, pagination) {
      state.pagination = pagination;
    },
    setSearch(state, searchShop) {
      state.searchShop = searchShop;
    },
    setBlackList(state,blackList){
        state.blackList=blackList;
    }
  },
  actions: {
    getShops({ commit }, rule = {}) {
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      axios({
        method: "get",
        url: "/shopSys",
        params: { page, rows, type, value }
      }).then(res => {
        // console.log(res.data.rows)
        let arr = res.data.rows;
        let shops = [];
        let audit = [];
        let blackList = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].status == "yes"&&arr[i].isUse !== "no") {
            shops.push(arr[i]);
            commit("setShops", shops);
          }else if(arr[i].status == "audit"){
                audit.push(arr[i]);
                commit("setAudit",audit);
          }else if (arr[i].isUse == "no") {
                blackList.push(arr[i]);
                commit("setBlackList",blackList)
          }
        }
        commit("setPagination", res.data);
        // console.log(audit);
        // commit("setShops", res.data.rows);
      });
    }
  }
};
