<template>
  <div>
    <div class="total" id="myChart" ref="myChart"></div>
  </div>
</template>

<script>
import axios from "axios";
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

export default {
  data() {
    return {
      shopId: "",
      date: [],
      count: []
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
      axios({
        url: "/shopApply/getSession",
        method: "get"
      }).then(res => {
        this.shopId = res.data.shops.$id;
        axios({
          method: "get",
          url: "/shopSys/order",
          params: { shopId: this.shopId }
        }).then(res => {
          let data = res.data;
          var date = new Date();
          let month = date.getMonth() + 1; //获取当前月份
          let year = date.getFullYear();
          var arry = new Array();
          for (let i = 0; i < 6; i++) {
            month = month - 1;
            if (month <= 0) {
              year = year - 1;
              month = month + 12;
            }
            // if (month < 10) {
            //   month = "0" + month;
            // }

            arry[i] = year + "年" + month + "月";
          }
          this.date = arry;
          var arr = [
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 }
          ];
          this.count = arr;
        //   item.service.price;
          data.forEach(item => {
            // let month = parseInt(item.date.split("年")[1]);
            if (item.status == 1) {
              if (item.date.includes(arry[0])) {
                arr[0].value+=parseInt(item.service.price);
              } else if (item.date.includes(arry[1])) {
                arr[1].value+=parseInt(item.service.price);
              } else if (item.date.includes(arry[2])) {
                arr[2].value+=parseInt(item.service.price);
              } else if (item.date.includes(arry[3])) {
                arr[3].value+=parseInt(item.service.price);
              } else if (item.date.includes(arry[4])) {
                arr[4].value+=parseInt(item.service.price);
              } else if (item.date.includes(arry[5])) {
                arr[5].value+=parseInt(item.service.price);
              }
            }
          });
          myChart.setOption(this.options, true);
        });
      });
    }
  },
  computed: {
    options() {
      return {
        color: ["#3398DB"],
        title: {
          text: "服务销售额统计(近六个月)"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
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
            data: this.date,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "销售总额",
            type: "bar",
            barWidth: "50%",
            data: this.count
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.total {
  width: 90%;
  height: 500px;
}
</style>
