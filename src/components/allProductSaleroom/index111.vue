<template>
  <div>
    <el-radio-group v-model="type" @change="showChart">
      <el-radio-button label="商品销量统计"></el-radio-button>
      <el-radio-button label="服务销量统计"></el-radio-button>
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

      if (this.type == "商品销量统计") {
        axios({
          url: "/order/getTradeNum",
          method: "get"
        }).then(res => {
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
      } else {
        axios({
          url: "/order/getTradeNum",
          method: "get"
        }).then(res => {
          // this.classAxisData = res.data.axisData;
          // this.classSeriesData = res.data.seriesData;
          // myChart.serveOpitons(this.classesOptions, true);
        });
      }
    }
  },
  computed: {
    tradeOptions() {
      return {
        title: {
          text: "商品销量的统计图"
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
    },
    serveOpitons() {
      return {
        title: {
          text: "商品销量的统计图"
        },
        tooltip: {},
        xAxis: {
          data: this.classAxisData
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: this.classSeriesData
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

