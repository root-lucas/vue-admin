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
import { HCA, HCB, HCC, HCD } from './data/data-option'
export default {
    name: 'highcharts',
    components: {
        XChart,
    },
    data() {
        return {
            optionA: HCA,
            optionB: HCB,
            optionC: HCC,
            optionD: HCD,
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
