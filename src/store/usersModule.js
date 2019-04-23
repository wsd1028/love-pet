import axios from "axios";
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
        address:"",
        score:"",
        pet:"",
        visible: false
    }},
    mutations: {
        setUsers(state, users) {
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
                console.log(res.data);
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
