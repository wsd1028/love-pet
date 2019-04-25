<template>
     <div>
        <a @click="pre">上一页</a>   
          <!-- <a v-for="n in pagination.maxpage" @click="$emit('show', n, 5,searchInfo.type, searchInfo.value)">{{n}}</a>      -->
        <a @click="next">下一页</a>  
    </div>
</template>

<script>
// export default {
//   props: ["pagination","searchInfo"],
//   methods: {
//     pre(){
//         if(this.pagination.curpage > 1){
//           this.$emit("show", parseInt(this.pagination.curpage) - 1, 5, this.searchInfo.type, this.searchInfo.value);   
//         }
//     },
//     next(){
//         if(this.pagination.curpage < this.pagination.maxpage){
//           this.$emit("show", parseInt(this.pagination.curpage) + 1, 5, this.searchInfo.type, this.searchInfo.value);     
//         }
//     }
//   }
// };
</script>

<style>
</style>
