import axios from "axios";
export default {
  namespaced: true,
  state: {
    suppliers: [],
    supplier: {
      name: "",
      phone: "",
      adress: "",
      id: "",
      visible: false
    },
    userName: "",
    searchRule: {
      type: "",
      value: ""
    },
    pagenation: {}
  },

  mutations: {
    setSuppliers(state, suppliers) {
      console.log("5636")
      state.suppliers = suppliers;
    },
    setUpdateStuVis(state, visible) {
      state.supplier = {
        ...state.supplier,
        visible
      };
    },
    setSupplier(state, supplier) {
      state.supplier = {
        ...supplier,
        visible: true
      };
    },
    setSearchRule(state, searchRule) {
      state.searchRule = searchRule;
    },
    setPagenation(state, pagenation) {
      state.pagenation = pagenation;
    },
    setUserName(state, userName) {
      state.userName = userName;
    }
  },
  actions: {
    getSuppliers({
      commit
    }, rule = {}) {
      console.log(23)
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      axios({
        method: "get",
        url: "/supplier",
        params: {
          page,
          rows,
          type,
          value
        }
      }).then(res => {
        commit("setSuppliers", res.data.rows);
        // commit("setPagenation", res.data);
      });
    },
    // addSupplier({ commit }, addMess) {
    //   axios({
    //     method: "post",
    //     url: "/lovePet/addStu",
    //     data: addMess
    //   }).then(res => {});
    // },
    // deleteSupplier({ commit }, id) {
    //   axios({
    //     method: "delete",
    //     url: "/lovePet/delete/" + id
    //   }).then(res => {});
    // },
    // getUpdateSupplier({ commit }) {
    //   axios({
    //     method: "get",
    //     url: "/supplier"
    //   }).then(res => {
    //     // console.log("")

    //     commit("lovePet", res.data);
    //   });
    // }
    // removeSession({ commit }) {
    //   axios({
    //     method: "get",
    //     url: "/removeSession"
    //   }).then(res => {
    //     commit("setUserName", "");
    //   });
    // },
    // updateStudent({ commit }, data) {
    //   axios({
    //     method: "put",
    //     url: "/lovePet/" + data._id,
    //     data: {
    //       name: data.name,
    //       age: data.age,
    //       gender: data.gender
    //     }
    //   }).then(res => {});
    // }
  }
};