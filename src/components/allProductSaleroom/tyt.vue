<template>
  <div>
    <el-radio-group v-model="value" @change="showChart">
      <el-radio-button label="商品总销售额"></el-radio-button>
      <el-radio-button label="服务总销售额"></el-radio-button>
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
  methods: {
    showChart() {
      let myChart = echarts.init(this.$refs.myChart);
      if (this.value == "商品总销售额") {
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
            data: ["每月销售额", "季度销售额", "年销售额"]
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
              data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"]
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "每月销售额",
              type: "line",
              stack: "总量",
              areaStyle: {},
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: "季度销售额",
              type: "line",
              stack: "总量",
              areaStyle: { normal: {} },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: "年销售额",
              type: "line",
              stack: "总量",
              label: {
                normal: {
                  show: true,
                  position: "top"
                }
              },
              areaStyle: { normal: {} },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
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