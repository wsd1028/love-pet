import axios from "axios";
export default {
  namespaced: true,
  state: {
    products: [],
    product: {
      name: "",
      type: "",
      totalNum: "",
      material: "",
      petSize: "",
      petType: "",
      weight: "",
      taste: "",
      effect: "",
      country: "",
      date: "",
      freshDate: "",
      company: "",
      explain: "",
      price: "",
      image: "",
      visible: false
    },
    // userName: "",
    searchRule: {
      type: "",
      value: ""
    },
    pagenation: {}
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    // setUpdateStuVis(state, visible) {
    //   state.student = { ...state.student, visible };
    // },
    // setStudent(state, student) {
    //   state.student = { ...student, visible: true };
    // },
    setSearchRule(state, searchRule) {
      state.searchRule = searchRule;
    },
    setPagenation(state, pagenation) {
      state.pagenation = pagenation;
    },
    // setUserName(state, userName) {
    //   state.userName = userName;
    // }
  },
  actions: {
    getProducts({
      commit
    }, rule = {}) {
      let page = rule.page || 1;
      let rows = rule.rows || 5;
      let type = rule.type || "";
      let value = rule.value || "";
      axios({
        method: "get",
        url: "/product",
        params: {
          page,
          rows,
          type,
          value
        }
      }).then(res => {
        commit("getProducts", res.data.rows);
        commit("setPagenation", res.data);
      });
    },
    // addStudent({ commit }, addMess) {
    //   axios({
    //     method: "post",
    //     url: "/students/addStu",
    //     data: addMess
    //   }).then(res => {});
    // },
    deleteProduct({
      commit
    }, id) {
      axios({
        method: "delete",
        url: "/product/delete/" + id
      }).then(res => {});
    },
    // getUpdateStudent({ commit }, id) {
    //   axios({
    //     method: "get",
    //     url: "/students/" + id
    //   }).then(res => {
    //     commit("setStudent", res.data);
    //   });
    // },
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
    //     url: "/students/" + data._id,
    //     data: {
    //       name: data.name,
    //       age: data.age,
    //       gender: data.gender
    //     }
    //   }).then(res => {});
    // }
  }
};