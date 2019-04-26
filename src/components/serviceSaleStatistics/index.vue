<template>
    <div>
        <el-radio-group v-model="type" @change="showChart" style="margin-bottom:30px">
            <el-radio-button label="月服务销量统计(近六个月)"></el-radio-button>
            <!-- <el-radio-button label="季度服务销售统计"></el-radio-button>
            <el-radio-button label="年服务销售统计"></el-radio-button> -->
        </el-radio-group>
        <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
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
      color: ["#3398DB"],
      type: "月服务销量统计(近6个月)",
      monthAxisData: [],
      MonthSeriesData: [],
      id: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.showChart();
    });
  },
  created() {
    axios({
      method: "get",
      url: "/login/shopManager/getSession"
    }).then(res => {
      // console.log(res.data, "session");

      if (!this.loginName) {
        this.id = res.data.shops.$id;
      }
    });
  },
  computed: {
    monthOptions() {
      return {
        title: {
          text: "月服务销量统计(近六个月)"
        },
        tooltip: {},

        xAxis: {
          data: this.monthAxisData
        },
        yAxis: { minInterval: 1 },
        series: [
          {
            name: "订单数",
            type: "bar",
            data: this.MonthSeriesData
          }
        ]
      };
    }
  },
  methods: {
    showChart() {
      console.log(this.id, "titt店铺ID");
      let myChart = echarts.init(this.$refs.myChart);
      if (this.type == "月服务销量统计(近六个月)") {
        axios({
          method: "get",
          url: "/register/serviceOrder",
          params: {
            id: this.id
          }
        }).then(res => {
          //   console.log(res.data, "res.data");
          //柱状图的横坐标
          let arr = [1, 2, 3, 4, 5, 6];
          let xData1 = [];
          arr.forEach(m => {
            //m是 往前推的总月份
            var myDate = new Date();
            var year = myDate.getFullYear(); //获取当前年
            var month = myDate.getMonth() + 1; //获取当前月
            var day = myDate.getDate(); //获取当前日
            var lowData = ""; //当前年月日往前推m个月后获取到的年月日
            let ylow = parseInt(parseInt(m) / 12); //往前推的总月份换成对应的年数取整
            let mlow = parseInt(m) % 12; //往前推的月数
            if (ylow > 0) {
              year -= ylow; //年要再减一
            } else {
              year = year; //年取当前年份
            }
            if (mlow > month || mlow == month) {
              //往前推的月份大于或等于当前月份，12减去往前推的月份加上现在的月份
              year = year - 1;
              month = 12 - mlow + month;
              lowData = year + "年" + month + "月";
            } else {
              //往前推的月份小于当前月份
              month -= mlow;
              lowData = year + "年" + month + "月";
            }
            // console.log(lowData, "lowData");
            xData1.push(lowData);
          });
          //   console.log(xData1, "xData1");

          //柱状图的纵坐标
          let linshi = [
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 }
          ];
          res.data.forEach(item => {
            if (item.date.includes(xData1[0])) {
              linshi[0].value += 1;
            } else if (item.date.includes(xData1[1])) {
              linshi[1].value += 1;
            } else if (item.date.includes(xData1[2])) {
              linshi[2].value += 1;
            } else if (item.date.includes(xData1[3])) {
              linshi[3].value += 1;
            } else if (item.date.includes(xData1[4])) {
              linshi[4].value += 1;
            } else if (item.date.includes(xData1[5])) {
              linshi[5].value += 1;
            }
          });
          //   console.log(linshi, "linshi");

          this.monthAxisData = xData1;
          this.MonthSeriesData = linshi;
          myChart.setOption(this.monthOptions, true);
        });
      }
    }
  }
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 400px;
}
</style>
