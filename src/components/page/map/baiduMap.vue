<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-coordinate"></i>百度地图</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                使用百度地图SDK工具包，使用访问地址：<a href="http://lbsyun.baidu.com/" target="_blank">百度地图SDK</a>
            </div>
            <el-input type="text" placeholder="输入搜索城市" style="width:20%;margin-right:20px;" /><el-button type="primary"
                >搜索</el-button
            ><br /><br />
            <div id="allmap" style="width:100%;height:500px;"></div>
        </div>
    </div>
</template>

<script>
import { loadingMap } from './load'
export default {
    name: 'Map',
    data() {
        return {}
    },
    created() {
        this.loadScript()
    },
    methods: {
        loadScript() {
            loadingMap('baidu', '6RpOmku3nc5ZLHStoVcXoiP2Va9BjuV9').then(() => {
                this.initMap()
            })
        },
        initMap() {
            // 百度地图API功能
            var map = new BMap.Map('allmap')
            map.centerAndZoom(new BMap.Point(113.30764968, 23.1200491), 12)
            // 添加带有定位的导航控件
            var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true,
            })
            map.addControl(navigationControl)
            // 添加定位控件
            var geolocationControl = new BMap.GeolocationControl()
            geolocationControl.addEventListener('locationSuccess', function(e) {
                // 定位成功事件
                var address = ''
                address += e.addressComponent.province
                address += e.addressComponent.city
                address += e.addressComponent.district
                address += e.addressComponent.street
                address += e.addressComponent.streetNumber
                alert('当前定位地址为：' + address)
            })
            geolocationControl.addEventListener('locationError', function(e) {
                // 定位失败事件
                alert(e.message)
            })
            map.addControl(geolocationControl)
            map.enableScrollWheelZoom(true)
            // 覆盖区域图层测试
            map.addTileLayer(new BMap.PanoramaCoverageLayer())

            var stCtrl = new BMap.PanoramaControl() //构造全景控件
            stCtrl.setOffset(new BMap.Size(20, 20))
            map.addControl(stCtrl) //添加全景控件
        },
    },
}
</script>

<style></style>
