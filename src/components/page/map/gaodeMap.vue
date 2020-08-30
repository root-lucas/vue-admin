<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-coordinate"></i>高德地图</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                使用高德地图SDK工具包，使用访问地址：<a href="https://lbs.amap.com/" target="_blank">高德地图SDK</a>
            </div>
            <el-input type="text" placeholder="输入搜索城市" style="width:20%;margin-right:20px;" /><el-button type="primary"
                >搜索</el-button
            ><br /><br />
            <div id="allmapp" style="width:100%;height:500px;"></div>
        </div>
    </div>
</template>

<script>
import { loadingMap } from './load'
export default {
    data() {
        return {}
    },
    created() {
        this.loadScript()
    },
    methods: {
        loadScript() {
            loadingMap('gaode', 'fd4d53420cd27886c3c2950a94099243').then(() => {
                this.initMap()
            })
        },
        initMap() {
            // 高德地图API功能
            //初始化地图对象，加载地图
            var map = new AMap.Map('allmapp', {
                resizeEnable: true,
                zoom: 10,
                viewMode: '3D',
                pinch: 45,
            })
            var options = {
                showButton: true, //是否显示定位按钮
                buttonPosition: 'LB', //定位按钮的位置
                /* LT LB RT RB */
                buttonOffset: new AMap.Pixel(10, 20), //定位按钮距离对应角落的距离
                showMarker: true, //是否显示定位点
                markerOptions: {
                    //自定义定位点样式，同Marker的Options
                    offset: new AMap.Pixel(-18, -36),
                    content: '<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>',
                },
                showCircle: true, //是否显示定位精度圈
                circleOptions: {
                    //定位精度圈的样式
                    strokeColor: '#0093FF',
                    noSelect: true,
                    strokeOpacity: 0.5,
                    strokeWeight: 1,
                    fillColor: '#02B0FF',
                    fillOpacity: 0.25,
                },
            }
            // 数组插件名
            AMap.plugin(['AMap.Geolocation', 'AMap.ControlBar'], function() {
                var geolocation = new AMap.Geolocation(options)
                map.addControl(geolocation)
                geolocation.getCurrentPosition()

                // 添加 3D 罗盘控制
                map.addControl(new AMap.ControlBar())
            })
        },
    },
}
</script>

<style></style>
