
<template>
    <div>
        <h1>所有服务销量额统计</h1>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="班级人数统计"></el-radio-button>
            <el-radio-button label="年龄分布统计"></el-radio-button>
            <el-radio-button label="地图"></el-radio-button>
        </el-radio-group>
        <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar"
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
            type: "班级人数统计",
            classAxisData: [],
            classSeriesData: [],
            ageAxisData: [],
            ageSeriesData: [],
            shopsCountData: [],
            shopsData: [],
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
            console.log("chart");
            let myChart = echarts.init(this.$refs.myChart);
            if (this.type == "班级人数统计") {
                axios({
                    url: "/classes/classesTotal",
                    method: "get"
                }).then(res => {
                    this.classAxisData = res.data.axisData;
                    this.classSeriesData = res.data.seriesData;
                    myChart.setOption(this.classesOptions, true);
                });
            } else if (this.type == "年龄分布统计") {
                axios({
                    url: "/students/ageTotal",
                    method: "get"
                }).then(res => {
                    this.ageAxisData = res.data.axisData;
                    this.ageSeriesData = res.data.seriesData;
                    myChart.setOption(this.ageOpitons, true);
                    console.log(this.ageAxisData, this.ageSeriesData);
                });
            } else {
                axios({
                    url: "/shops/counts",
                    method: "get"
                }).then(res => {
                    this.shopsCountData = res.data;
                    myChart.setOption(this.mapOptions, true);
                });
                myChart.on("finished", () => {
                    // 从echarts对象中获取bmap对象
                    var bmap = myChart
                        .getModel()
                        .getComponent("bmap")
                        .getBMap();

                    // 设置最小缩放值
                    bmap.setMinZoom(5);
                    // 设置最大缩放值
                    // bmap.setMaxZoom(15);
                    // 缩放结束后的事件
                    bmap.addEventListener("zoomend", e => {
                        let zoom = this.zoom;
                        this.zoom = bmap.getZoom();
                        // 打印出当前缩放值
                        if (zoom < bmap.getZoom() && bmap.getZoom() == 10) {
                            axios({
                                url: "/shops",
                                method: "get"
                            }).then(res => {
                                this.shopsData = res.data;
                                let options = this.mapOptions;
                                options.bmap.zoom = 10;
                                myChart.setOption(this.mapOptions, false);
                            });
                        } else if (
                            zoom > bmap.getZoom() &&
                            bmap.getZoom() <= 10
                        ) {
                            this.shopsData = [];
                            let options = this.mapOptions;
                            myChart.setOption(this.mapOptions, false);
                        }
                    });
                });
            }
        }
    },
    computed: {
        classesOptions() {
            return {
                title: {
                    text: "班级人数的统计图"
                },
                tooltip: {},
                xAxis: {
                    data: this.classAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "人数",
                        type: "bar",
                        data: this.classSeriesData
                    }
                ]
            };
        },
        ageOpitons() {
            return {
                title: {
                    text: "各个阶段年龄分布",
                    subtext: "纯属虚构",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: this.ageAxisData
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: this.ageSeriesData,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            };
        },
        mapOptions() {
            return {
                title: {
                    text: "全国门店统计",
                    left: "center",
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item"
                },
                bmap: {
                    center: [104.072259, 30.663403],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                        styleJson: [
                            {
                                featureType: "water",
                                elementType: "all",
                                stylers: {
                                    color: "#044161"
                                }
                            },
                            {
                                featureType: "land",
                                elementType: "all",
                                stylers: {
                                    color: "#004981"
                                }
                            },
                            {
                                featureType: "boundary",
                                elementType: "geometry",
                                stylers: {
                                    color: "#064f85"
                                }
                            },
                            {
                                featureType: "railway",
                                elementType: "all",
                                stylers: {
                                    visibility: "off"
                                }
                            },
                            {
                                featureType: "highway",
                                elementType: "geometry",
                                stylers: {
                                    color: "#004981"
                                }
                            },
                            {
                                featureType: "highway",
                                elementType: "geometry.fill",
                                stylers: {
                                    color: "#005b96",
                                    lightness: 1
                                }
                            },
                            {
                                featureType: "highway",
                                elementType: "labels",
                                stylers: {
                                    visibility: "off"
                                }
                            },
                            {
                                featureType: "arterial",
                                elementType: "geometry",
                                stylers: {
                                    color: "#004981"
                                }
                            },
                            {
                                featureType: "arterial",
                                elementType: "geometry.fill",
                                stylers: {
                                    color: "#00508b"
                                }
                            },
                            {
                                featureType: "poi",
                                elementType: "all",
                                stylers: {
                                    visibility: "off"
                                }
                            },
                            {
                                featureType: "green",
                                elementType: "all",
                                stylers: {
                                    color: "#056197",
                                    visibility: "off"
                                }
                            },
                            {
                                featureType: "subway",
                                elementType: "all",
                                stylers: {
                                    visibility: "off"
                                }
                            },
                            {
                                featureType: "manmade",
                                elementType: "all",
                                stylers: {
                                    visibility: "on"
                                }
                            },
                            {
                                featureType: "local",
                                elementType: "all",
                                stylers: {
                                    visibility: "on"
                                }
                            },
                            {
                                featureType: "arterial",
                                elementType: "labels",
                                stylers: {
                                    visibility: "on"
                                }
                            },
                            {
                                featureType: "boundary",
                                elementType: "geometry.fill",
                                stylers: {
                                    color: "#029fd4"
                                }
                            },
                            {
                                featureType: "building",
                                elementType: "all",
                                stylers: {
                                    color: "#1a5787"
                                }
                            },
                            {
                                featureType: "city",
                                elementType: "labels",
                                stylers: {
                                    visibility: "off"
                                }
                            },
                            {
                                featureType: "district",
                                elementType: "labels",
                                stylers: {
                                    visibility: "off"
                                }
                            },
                            {
                                featureType: "town",
                                elementType: "labels",
                                stylers: {
                                    visibility: "off"
                                }
                            }
                        ]
                    }
                },
                series: [
                    {
                        name: "门店数",
                        type: "scatter",
                        coordinateSystem: "bmap",
                        data: this.shopsCountData,
                        symbolSize: function(val) {
                            return val[2] * 2;
                        },
                        // label: {
                        //     show: true,
                        //     formatter: function(params) {
                        //         return params.data[3];
                        //     }
                        // },
                        itemStyle: {
                            normal: {
                                color: "#ddb926"
                            }
                        },
                        tooltip: {
                            formatter: function(params, ticket, callback) {
                                return (
                                    "城市：" +
                                    params.data[3] +
                                    "<br>门店数：" +
                                    params.data[2]
                                );
                            }
                        }
                    },
                    {
                        name: "门店位置",
                        type: "scatter",
                        coordinateSystem: "bmap",
                        data: this.shopsData,
                        symbol: "pin",
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                color: "red"
                            }
                        },
                        tooltip: {
                            formatter: function(params, ticket, callback) {
                                return (
                                    "店铺名称：" +
                                    params.data[2] +
                                    "<br>地址：" +
                                    params.data[3]
                                );
                            }
                        }
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
