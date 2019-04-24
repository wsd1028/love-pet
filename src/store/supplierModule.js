import axios from "axios";
export default {
  namespaced: true,
  state: {
    suppliers: [],
    supplier: {
      name: "",
      phone: "",
      adress: "",
      pepole:"",
      img:"",
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
        commit("setPagenation", res.data);
      });
    },
    addSupplier({
      commit
    }, addMess) {
      console.log("addMess",addMess)
      axios({
        method: "post",
        url: "/supplier/addSuppliers",
        data: addMess
      }).then(res => {});
    },
    deleteSupplier({
      commit
    }, id) {
      axios({
        method: "delete",
        url: "/supplier/delete/" + id
      }).then(res => {});
    },
    getUpdateSupplier({ commit },id) {
      axios({
        method: "get",
        url: "/supplier/"+id
      }).then(res => {
        commit("setSupplier", res.data);
      });
    },
    // removeSession({ commit }) {
    //   axios({
    //     method: "get",
    //     url: "/removeSession"
    //   }).then(res => {
    //     commit("setUserName", "");
    //   });
    // },
    updateSupplier({ commit }, data) {
      axios({
        method: "put",
        url: "/supplier/" + data._id,
        data: {
          name: data.name,
          phone: data.phone,
          adress: data.adress,
          pepole: data.pepole,
          img:data.img
        }
      }).then(res => {});
    }
  }
};