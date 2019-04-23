<template>
    <div>
        <SearchPetMastor @show="show" @setSearchInfo="setSearchInfo"></SearchPetMastor>
        <PetMastorList :students="students" @show="show" @setStudent="setStudent"></PetMastorList>
        <Page :pagination="pagination" @show="show" :searchInfo="searchInfo"></Page>
    </div>
</template>

<script>
import axios from "axios";
import PetMastorList from "./PetMastor.vue"
import SearchPetMastor from "./SearchPetMastor.vue"
import Page from "./Page"

export default {
  data() {
    return {
      users: [],
      user: {},
      pagination: {},
      searchInfo:{
          type:"",
          value:""
      },
    };
  },
  components: {
    
    PetMastorList,
    SearchPetMastor,
    Page
  },
  methods: {
    show(page = 1, rows = 5, type, value) {
      axios({
        method: "get",
        url: "/petMastor",
        params: {
          page,
          rows,
          type,
          value
        }
      }).then(res => {
        console.log(res.data);
        this.users = res.data.rows;
        this.pagination = res.data;
      });
    },
    setUser(user) {
      this.user = user;
    },
    setSearchInfo(info) {
      this.searchInfo = info;
    }
  },
  created() {
    this.show();
  }
};
</script>

<style>
</style>
<template>
    <div>
        <SearchPetMastor @show="show" @setSearchInfo="setSearchInfo"></SearchPetMastor>
        <PetMastorList :students="students" @show="show" @setStudent="setStudent"></PetMastorList>
        <Page :pagination="pagination" @show="show" :searchInfo="searchInfo"></Page>
    </div>
</template>

<script>
import axios from "axios";
import PetMastorList from "./PetMastor.vue"
import SearchPetMastor from "./SearchPetMastor.vue"
import Page from "./Page"

export default {
  data() {
    return {
      users: [],
      user: {},
      pagination: {},
      searchInfo:{
          type:"",
          value:""
      },
    };
  },
  components: {
    
    PetMastorList,
    SearchPetMastor,
    Page
  },
  methods: {
    show(page = 1, rows = 5, type, value) {
      axios({
        method: "get",
        url: "/petMastor",
        params: {
          page,
          rows,
          type,
          value
        }
      }).then(res => {
        console.log(res.data);
        this.users = res.data.rows;
        this.pagination = res.data;
      });
    },
    setUser(user) {
      this.user = user;
    },
    setSearchInfo(info) {
      this.searchInfo = info;
    }
  },
  created() {
    this.show();
  }
};
</script>

<style>
</style>
