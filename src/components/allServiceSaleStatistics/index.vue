<template>
<div>
<el-radio-group
v-model="value"
@change="showChart"
>

<el-radio-button label="服务总销售额" @click="showChart"></el-radio-button>
</el-radio-group>
<div
class="total"
id="myChart"
ref="myChart"
></div>
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
      serveData: [],
      numbers: [],
      sales: []
      
    };
  },
  methods: {
    showChart() {
      let myChart = echarts.init(this.$refs.myChart);
      console.log(this.value);

      if (this.value == "服务总销售额") {
        console.log(111);

        axios({
          url: "/petMaster/serviceOrder",
          method: "get"
        }).then(res => {
          // this.xAxisData= res.data.date;
        //   console.log(res.data[0].date);
        //   console.log(res.data[0].service.price);
          for (let i = 1; i <=12; i++) {
            
            let str = 2019 + "年" + i+"月";
           
            let sales = 0;
            for (let j = 0; j < res.data.length; j++) {
              let dateO = res.data[j].date.substring(0, 7);
               let date1 = res.data[j].date.substring(0, 8);
              if (dateO == str||date1 == str) {

                sales += ~~(res.data[j].service.price);
              }
            }
            // console.log(sales,"111111111111111111111111111111");
            
            this.sales.push(sales);
            
            // console.log(this.sales);
          }
            
            //   for(let i in res.data){
            //       console.log(res.data[i]);
            //      let dateO = res.data[i].date.substring(0, 7);
            //       console.log(dateO);

            //   }
             myChart.setOption({
          title: {
            text: "服务销售额统计"
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
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
              ]
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
              data: this.sales
            },
            // {
            //   name: "季度销售额",
            //   type: "line",
            //   stack: "总量",
            //   areaStyle: { normal: {} },
            //   data: this.sales
            // },
            // {
            //   name: "年销售额",
            //   type: "line",
            //   stack: "总量",
            //   label: {
            //     normal: {
            //       show: true,
            //       position: "top"
            //     }
            //   },
            //   areaStyle: { normal: {} },
            //   data: [820, 932, 901, 934, 1290, 1330, 1320]
            // }
          ]
        });
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