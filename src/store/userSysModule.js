import axios from "axios";
export default {
  namespaced: true,
  state: {
    userSys: [], //  所有平台管理员数据
    pagation: {},
    oneUser: {}, //一条数据
    updateVisible: false
  },
  mutations: {
    setUserSys(state, userSys) {
      state.userSys = userSys;
    },
    setOneUser(state, oneUser) {
      state.oneUser = oneUser;
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
    setUserSys({ commit }, payload = {}) {
      let page = payload.page || 1;
      let rows = payload.rows || 5;
      let type = payload.type;
      let value = payload.value;
      axios({
        method: "get",
        url: "/userSys",
        params: { page, rows, type, value }
      }).then(res => {
        console.log(res);
        commit("setUserSys", res.data.rows);
        commit("setPagation", res.data);
        // console.log(this.state.pagation,"打印分页数据");
        // console.log(res.data.rows,"打印所有平台管理员");
      });
    },
    setOneUser({ commit }, id) {
      axios({
        method: "get",
        url: "/userSys/" + id
      }).then(res => {
        // console.log(res.data,"某项学生数据");
        commit("setOneUser", res.data);
        // console.log(this.state.student);
      });
    },
    setVisible({ commit }, isTrue) {
      commit("setVisible", isTrue);
    }
  }
};
