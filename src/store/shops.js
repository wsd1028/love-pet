import axios from "axios";
export default {
  namespaced: true,
  state: {
    status: "",
    shops: [],
    audit: [],
    blackList: [],
    searchShop: {
      type: "",
      value: ""
    },
    pagination: {},
    paginationBlack: {}
  },
  mutations: {
    setShops(state, shops) {
      state.shops = shops;
    },
    setAudit(state, audit) {
      state.audit = audit;
    },
    setPagination(state, pagination) {
      state.pagination = pagination;
    },
    setPaginationBlack(state, paginationBlack) {
      state.paginationBlack = paginationBlack;
    },
    setSearch(state, searchShop) {
      state.searchShop = searchShop;
    },
    setBlackList(state, blackList) {
      state.blackList = blackList;
    }
  },
  actions: {
    getShops({ commit }, rule = {}) {
      let status = rule.status || "yes";
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      axios({
        method: "get",
        url: "/shopSys",
        params: { status, page, rows, type, value }
      }).then(res => {
        let arr = res.data.rows;
        let shops = [];
        let audit = [];
        let blackList = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].status == "yes") {
            shops.push(arr[i]);
            commit("setShops", shops);
          }else if (arr[i].status == "audit") {
            audit.push(arr[i]);
            commit("setAudit", audit);
          }else if (arr[i].status == "no") {
            blackList.push(arr[i]);
            commit("setBlackList", blackList);
<<<<<<< HEAD
          }else if(arr[i].status == "failed"){
            failed.push(arr[i]);
            commit("setFailed", failed);
=======
>>>>>>> 95b399d33e08a9c9f7eebfb8d0c246133cea3d66
          }
        }
        commit("setPagination", res.data);
        commit("setPaginationBlack", res.data);
      });
    },
    
  }
};
