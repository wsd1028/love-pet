<template>
  <div>
    <el-radio-group v-model="value" @change="showChart">
      <el-radio-button label="月总销售额"></el-radio-button>
      <el-radio-button label="季度总销售额"></el-radio-button>
      <el-radio-button label="年总销售额"></el-radio-button>
      <!-- <el-radio-button label="服务总销售额"></el-radio-button> -->
    </el-radio-group>
    <div class="total" id="myChart" ref="myChart"></div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import axios from "axios";
// 引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/extension/bmap/bmap";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
let data = new FormData();
export default {
  data() {
    return {
      value: "",
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
          url: "/allProductSaleroom/getTradeNum",
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
          url: "/allProductSaleroom/getTradeNum",
          method: "get"
        }).then(res => {
          // this.classAxisData = res.data.axisData;
          // this.classSeriesData = res.data.seriesData;
          // myChart.serveOpitons(this.classesOptions, true);
        });
      }

      if (this.value == "季度总销售额") {
        myChart.setOption({
          title: {
            text: "商品销售额统计"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          legend: {
            data: ["每个季度销售额"]
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: ["第一季度", "第二季度", "第三季度", "第四季度"]
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "每个季度销售额",
              type: "line",
              stack: "总量",
              areaStyle: {},
              data: [250, 256, 10, 600]
            }
          ]
        });
      }
      if (this.value == "年总销售额") {
        myChart.setOption({
          title: {
            text: "商品销售额统计"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          legend: {
            data: ["每年销售额"]
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: ["2016年", "2017年", "2018年", "2019年"]
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "每年销售额",
              type: "line",
              stack: "总量",
              areaStyle: {},
              data: [0, 232, 0, 0]
            }
          ]
        });
      }
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