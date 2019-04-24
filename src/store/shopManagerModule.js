import axios from "axios";
export default {
  namespaced: true,
  state: {
    shopManagers: [], //  所有平台管理员数据
    pagation: {},
    oneShopManager: {}, //一条数据
    updateVisible: false
  },
  mutations: {
    setshopManagers(state, shopManagers) {
      state.shopManagers = shopManagers;
    },
    setoneShopManager(state, oneShopManager) {
      state.oneShopManager = oneShopManager;
    },
    setPagation(state, pagation) {
      state.pagation = pagation;
    },
    setVisible(state, updateVisible) {
      state.updateVisible = updateVisible;
    }
  },
  getters: {},
  actions: {
    setshopManagers({ commit }, payload = {}) {
      let page = payload.page || 1;
      let rows = payload.rows || 5;
      let type = payload.type;
      let value = payload.value;
      axios({
        method: "get",
        url: "/shopManager",
        params: { page, rows, type, value }
      }).then(res => {
        console.log(res);
        commit("setshopManagers", res.data.rows);
        commit("setPagation", res.data);
        // console.log(this.state.pagation,"打印分页数据");
        console.log(res.data.rows,"打印所有平台管理员");
      });
    },
    setoneShopManager({ commit }, id) {
      axios({
        method: "get",
        url: "/shopManager/" + id
      }).then(res => {
        // console.log(res.data,"某项学生数据");
        commit("setoneShopManager", res.data);
        // console.log(this.state.student);
      });
    },
    setVisible({ commit }, isTrue) {
      commit("setVisible", isTrue);
    }
  }
};
