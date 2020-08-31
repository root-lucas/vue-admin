<template>
    <div class="x-bar">
        <div :id="id" :option="option"></div>
    </div>
</template>
<script>
import HighCharts from 'highcharts'
// 引入并使用3D效果模块
import Highcharts3D from 'highcharts/highcharts-3d'
Highcharts3D(HighCharts)
export default {
    // 验证类型
    props: {
        id: {
            type: String,
        },
        option: {
            type: Object,
        },
    },
    watch: {
        option() {
            HighCharts.chart(this.id, this.option)
            // HighCharts.setOptions({
            //     global: {
            //         useUTC: true,
            //     },
            // })
        },
    },
    mounted() {
        HighCharts.chart(this.id, this.option)
    },
}
</script>
