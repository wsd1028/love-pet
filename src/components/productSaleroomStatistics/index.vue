<template>
  <div>
    <el-radio-group v-model="type" @change="showChart">
      <el-radio-button label="近六月商品销售额"></el-radio-button>
    </el-radio-group>
    <div class="total" id="myChart" ref="myChart"></div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/extension/bmap/bmap";
import axios from "axios";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      type: "商品销量统计",
      tradeName: [],
      tradeNumber: [],
      zoom: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.showChart();
    });
  },
  methods: {
    showChart() {
      let myChart = echarts.init(this.$refs.myChart);
      if (this.type == "近六月商品销售额") {
        axios({
          url: "/product/getTradeNum",
          method: "get"
        }).then(res => {
          // console.log(res)
          this.tradeName = [];
          this.tradeNumber = [];
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].product.length; j++) {
              if ((i = res.data.length - 1)) {
                this.tradeName.push(res.data[i].product[j].name);
              }
            }
          }
          for (let i = 0; i < res.data[0].product.length; i++) {
            let num = 0;
            for (let j = 0; j < res.data.length; j++) {
              num += res.data[j].product[i].number;
            }
            this.tradeNumber.push(num);
          }
          myChart.setOption(this.tradeOptions, true);
        });
      }
    }
  },
  computed: {
    tradeOptions() {
      return {
        title: {
          text: "近六月商品销售额"
        },
        tooltip: {},
        xAxis: {
          data: this.tradeName
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: this.tradeNumber
          }
        ]
      };
    }
  }
};
</script>
<style scoped>
.total {
  width: 100%;
  height: 500px;
}
</style>
