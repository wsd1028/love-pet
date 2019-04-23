import axios from "axios";
// export default {
//   namespaced: true,
//   state: {
//     users: [],
//     user: {
//       phone:"",
//       name: "",
//       realName:"",
//       vip: "",
//       headImg: "",
//       id: "",
//       address:"",
//       score:"",
//       pet:"",
//       visible: false
//     },
//     userName: "",
//     searchRule: {
//       type: "",
//       value: ""
//     },
//     pagenation: {}
//   },
//   mutations: {
//     setUsers(state, users) {
//       state.users = users;
//     },
//     setUpdateStuVis(state, visible) {
//       state.student = { ...state.student, visible };
//     },
//     setUser(state, user) {
//       state.user = { ...user, visible: true };
//     },
//     setSearchRule(state, searchRule) {
//       state.searchRule = searchRule;
//     },
//     setPagenation(state, pagenation) {
//       state.pagenation = pagenation;
//     },
//     setUserName(state, userName) {
//       state.userName = userName;
//     }
//   },
//   actions: {
//     getUsers({ commit }, rule = {}) {
//       let page = rule.page || 1;
//       let rows = rule.rows || 5;
//       let type = rule.type || "";
//       let value = rule.value || "";
//       axios({
//         method: "get",
//         url: "/petMaster",
//         params: { page, rows, type, value }
//       }).then(res => {
//         commit("setUsers", res.data.rows);
//         commit("setPagenation", res.data);
//       });
//     },
    
//     removeSession({ commit }) {
//       axios({
//         method: "get",
//         url: "/removeSession"
//       }).then(res => {
//         commit("setUserName", "");
//       });
//     },
//     updateStudent({ commit }, data) {
//       axios({
//         method: "put",
//         url: "/students/" + data._id,
//         data: {
//           name: data.name,
//           age: data.age,
//           gender: data.gender
//         }
//       }).then(res => {});
//     }
//   }
// };

export default {
    namespaced: true,
    state: {
      users: [],
      user: {
        phone:"",
        name: "",
        realName:"",
        vip: "",
        headImg: "",
        id: "",
        address:"",
        score:"",
        pet:"",
        visible: false
    },
    mutations: {
        setUsers(state, useres) {
            state.users = users;
        },
        setUser(state, user) {
            state.user = user;
        },
        setPage(state, pagination) {
            state.pagination = pagination;
        },
        setVisible(state,flag){
            state.visible = flag;
        }
    },
    actions: {
        setUsers({ commit }, info = {}) {
            let page = info.page || 1;
            let rows = info.rows || 5;
            let type = info.type || "";
            let value = info.value || "";
            axios({
                method: "get",
                url: "/petMaster",
                params: {
                    page,
                    rows,
                    type,
                    value
                }
            }).then(res => {
                commit("setUsers", res.data.rows);
                commit("setPage", res.data);
            });
        },
        setUser({ commit }, id) {
            axios({
                method: "get",
                url: "/petMaster/" + id
            }).then(res => {
                commit("setUser", res.data);
            });
        }
    }
}
}
