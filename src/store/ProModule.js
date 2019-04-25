import axios from "axios";
export default {
  namespaced: true,
  state: {
    supplier:[],
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
    searchRule: {
      type: "",
      value: ""
    },
    pagenation: {}
  },
  mutations: {
    setSupplier(state, supplier){
      state.supplier=supplier;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setUpdateProVis(state, visible) {
      state.product = { ...state.product, visible };
    },
    setProduct(state, product) {
      state.product = { ...product, visible: true };
    },
    setSearchRule(state, searchRule) {
      state.searchRule = searchRule;
    },
    setPagenation(state, pagenation) {
      state.pagenation = pagenation;
    },
  },
  actions: {
    getSupplier({ commit }){
      axios({
        method: "get",
        url: "/product/supplier"
      }).then(res => {
        commit("setSupplier", res.data);
      });
    },
    getProducts({ commit }, rule = {}) {
      let page = rule.page || 1;
      let rows = rule.rows || 3;
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
        commit("setProducts", res.data.rows);
        commit("setPagenation", res.data);
      });
    },
    // 增加
    addProduct({ commit }, addMess) {
      axios({
        method: "post",
        url: "/product/addPro",
        data: addMess
      }).then(res => {});
    },
    //删除
    deleteProduct({ commit }, id) {
      axios({
        method: "delete",
        url: "/product/delete/" + id
      }).then(res => {
          
      });
    },
    //获取修改哪一行数据
    getUpdateProduct({ commit }, id) {
      axios({
        method: "get",
        url: "/product/" + id
      }).then(res => {
        commit("setProduct", res.data);
      });
    },
    //修改
    updateProduct({ commit }, data) {
      axios({
        method: "put",
        url: "/product/" + data._id,
        data: {
          name: data.name,
          type: data.type,
          totalNum: data.totalNum,
          material: data.material,
          petSize: data.petSize,
          petType: data.petType,
          weight: data.weight,
          taste: data.taste,
          effect: data.effect,
          country: data.country,
          date: data.date,
          freshDate: data.freshDate,
          company: data.company,
          explain: data.explain,
          price: data.price,
          image: data.image,
        }
      }).then(res => {});
    }
  }
};