<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-pie-chart"></i> schart图表 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                echarts的图表组件，访问地址：
                <a href="https://echarts.apache.org/zh/index.html" target="_blank">echarts</a>
            </div>
            <div class="schart-box">
                <div class="content-title">红包数据图</div>
                <div id="mybtsb" class="lft clearfix" ref="mybts" style="width: 600px; height: 300px;"></div>
            </div>
            <div class="schart-box">
                <div class="content-title">中国图</div>
                <div id="myMap" class="lft clearfix" ref="myMap" style="width: 600px; height: 300px;"></div>
            </div>
            <div class="schart-box">
                <div class="content-title">环形图</div>
                <div id="mybt" class="lft clearfix" ref="mybt" style="width: 600px; height: 300px;"></div>
            </div>
            <div class="schart-box">
                <div class="content-title">饼状图</div>
                <div id="mybts" class="lft clearfix" ref="mybts" style="width: 600px; height: 300px;"></div>
            </div>
            <div class="schart-box">
                <div class="content-title">柱状图</div>
                <div id="myChart" class="lft clearfix" :style="{ width: '600px', height: '300px' }"></div>
            </div>
        </div>
    </div>
</template>

<script>
// let echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/bar') // 引入柱状图组件
// require('echarts/lib/chart/pie') // 引入饼状图组件
require('echarts/map/js/china.js') // 引入中国地图组件
// 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/theme/macarons') //引入主题
// require('echarts/theme/shine') //引入主题
import { map, bar, doughnut, circle, broken } from './data/data-option'
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            chart: null,
        }
    },
    created() {},
    mounted() {
        this.creatE()
        this.drawChinaMap()
        this.creatbt()
        this.creatbts()
        this.creatzx()
    },
    updated() {
        if (!this.chart) {
            this.initChart()
        }
    },
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    computed: {},
    methods: {
        drawChinaMap() {
            this.chart = this.$echarts.init(document.getElementById('myMap'), 'macarons')
            this.chart.setOption(map)
        },
        creatE() {
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption(bar)
        },
        creatbt() {
            let myChart = this.$echarts.init(document.getElementById('mybt'))
            // 绘制图表
            myChart.setOption(doughnut)
        },
        creatbts() {
            let myChart = this.$echarts.init(document.getElementById('mybts'))
            // 绘制图表
            myChart.setOption(circle)
        },
        creatzx() {
            let myChart = this.$echarts.init(document.getElementById('mybtsb'))
            // 绘制图表
            myChart.setOption(broken)
        },
    },
}
</script>

<style scoped>
.lft {
    float: left;
}
.schart-box {
    display: inline-block;
    margin: 20px;
}
.schart {
    width: 600px;
    height: 400px;
}
</style>
