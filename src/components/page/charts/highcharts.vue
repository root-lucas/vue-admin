<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-pie-chart"></i> schart图表 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                highcharts的图表组件，访问地址：
                <a href="https://echarts.apache.org/zh/index.html" target="_blank">highcharts</a>
            </div>
            <div class="schart-box">
                <x-chart id="highchartsA" class="high" ref="mybts" style="width: 600px; height: 300px;" :option="optionA"></x-chart>
            </div>
            <div class="schart-box">
                <x-chart id="highchartsB" class="high" ref="mybts" style="width: 600px; height: 300px;" :option="optionB"></x-chart>
            </div>
            <div class="schart-box">
                <x-chart id="highchartsC" class="high" ref="mybts" style="width: 600px; height: 300px;" :option="optionC"></x-chart>
            </div>
            <div class="schart-box">
                <x-chart id="highchartsD" class="high" ref="mybts" style="width: 600px; height: 300px;" :option="optionD"></x-chart>
            </div>
        </div>
    </div>
</template>

<script>
import XChart from '../../common/charts.vue'
export default {
    name: 'highcharts',
    components: {
        XChart,
    },
    data() {
        return {
            optionA: {
                chart: {
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 15,
                        beta: 15,
                        viewDistance: 25,
                        depth: 40,
                    },
                    marginTop: 80,
                    marginRight: 40,
                },
                title: {
                    text: '以性别划分的水果消费总量',
                },
                xAxis: {
                    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉'],
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: '水果数量',
                    },
                },
                tooltip: {
                    headerFormat: '<b>{point.key}</b><br>',
                    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}',
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        depth: 40,
                    },
                },
                series: [
                    {
                        name: '小张',
                        data: [5, 3, 4, 7, 2],
                        stack: 'male',
                    },
                    {
                        name: '小王',
                        data: [3, 4, 4, 2, 5],
                        stack: 'male',
                    },
                    {
                        name: '小彭',
                        data: [2, 5, 6, 2, 1],
                        stack: 'female',
                    },
                    {
                        name: '小潘',
                        data: [3, 0, 4, 4, 3],
                        stack: 'female',
                    },
                ],
            },
            optionB: {
                chart: {
                    type: 'spline',
                    marginRight: 10,
                    events: {
                        load: function() {
                            var series = this.series[0],
                                chart = this
                            let activeLastPointToolip = (chart) => {
                                var points = chart.series[0].points
                                chart.tooltip.refresh(points[points.length - 1])
                            }
                            activeLastPointToolip(chart)
                            setInterval(function() {
                                var x = new Date().getTime(), // 当前时间
                                    y = Math.random() // 随机值
                                series.addPoint([x, y], true, true)
                                activeLastPointToolip(chart)
                            }, 1000)
                        },
                    },
                },
                title: {
                    text: '中英时间差实时数据',
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150,
                },
                yAxis: {
                    title: {
                        text: null,
                    },
                },
                tooltip: {
                    formatter: function() {
                        return '<b>' + this.series.name + '</b><br/>' + new Date() + '<br/>'
                    },
                },
                legend: {
                    enabled: false,
                },
                series: [
                    {
                        name: '中国时间',
                        data: (function() {
                            // 生成随机值
                            var data = [],
                                time = new Date().getTime(),
                                i
                            for (i = -19; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1000,
                                    y: Math.random(),
                                })
                            }
                            return data
                        })(),
                    },
                ],
            },
            optionC: {
                title: {
                    text: '2014 ~ 2020 年太阳能行业就业人员发展情况',
                    align: 'center',
                    style: {
                        color: '#000',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: '18px',
                        fontWeight: '400',
                    },
                },
                subtitle: {
                    text: '数据来源：Boss 直聘',
                },
                yAxis: {
                    title: {
                        text: '就业人数',
                    },
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false,
                        },
                        pointStart: 2014,
                    },
                },
                series: [
                    {
                        name: '安装，实施人员',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
                    },
                    {
                        name: '工人',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
                    },
                    {
                        name: '销售',
                        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
                    },
                    {
                        name: '项目开发',
                        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
                    },
                    {
                        name: '其他',
                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
                    },
                ],
                responsive: {
                    rules: [
                        {
                            condition: {
                                maxWidth: 500,
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom',
                                },
                            },
                        },
                    ],
                },
            },
            optionD: {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0,
                    },
                },
                title: {
                    text: '2020年某网站不同浏览器访问量占比',
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}',
                        },
                    },
                },
                series: [
                    {
                        type: 'pie',
                        name: '浏览器占比',
                        data: [
                            ['Firefox', 12.8],
                            ['IE', 13.8],
                            {
                                name: 'Chrome',
                                y: 55.0,
                                sliced: true,
                                selected: true,
                            },
                            ['Safari', 8.5],
                            ['Opera', 6.2],
                            ['Others', 3.7],
                        ],
                    },
                ],
            },
        }
    },
}
</script>

<style>
.schart-box {
    display: inline-block;
    margin: 20px 20px 100px 20px;
}
</style>
