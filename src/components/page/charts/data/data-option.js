// echarts 图表数据 map, bar, doughnut, circle, broken
// highCharts 图表数据 HCA, HCB, HCC, HCD
// schart 图表数据 optionA, optionB, optionC, optionD
export { map, bar, doughnut, circle, broken, HCA, HCB, HCC, HCD, optionA, optionB, optionC, optionD }

// 中国地图
const map = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '全国地图大数据',
        subtext: '虚构数据',
        x: 'center',
    },
    tooltip: {
        trigger: 'item',
    },

    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'center',
        splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 },
        ],
        color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea'],
    },

    //配置属性
    series: [
        {
            name: '数据',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
                normal: {
                    show: true, //省份名称
                },
                emphasis: {
                    show: false,
                },
            },
            data: [
                { name: '北京', value: Math.round(Math.random() * 500) },
                { name: '天津', value: Math.round(Math.random() * 500) },
                { name: '上海', value: Math.round(Math.random() * 500) },
                { name: '重庆', value: Math.round(Math.random() * 500) },
                { name: '河北', value: Math.round(Math.random() * 500) },
                { name: '河南', value: Math.round(Math.random() * 500) },
                { name: '云南', value: Math.round(Math.random() * 500) },
                { name: '辽宁', value: Math.round(Math.random() * 500) },
                { name: '黑龙江', value: Math.round(Math.random() * 500) },
                { name: '湖南', value: Math.round(Math.random() * 500) },
                { name: '安徽', value: Math.round(Math.random() * 500) },
                { name: '山东', value: Math.round(Math.random() * 500) },
                { name: '新疆', value: Math.round(Math.random() * 500) },
                { name: '江苏', value: Math.round(Math.random() * 500) },
                { name: '浙江', value: Math.round(Math.random() * 500) },
                { name: '江西', value: Math.round(Math.random() * 500) },
                { name: '湖北', value: Math.round(Math.random() * 500) },
                { name: '广西', value: Math.round(Math.random() * 500) },
                { name: '甘肃', value: Math.round(Math.random() * 500) },
                { name: '山西', value: Math.round(Math.random() * 500) },
                { name: '内蒙古', value: Math.round(Math.random() * 500) },
                { name: '陕西', value: Math.round(Math.random() * 500) },
                { name: '吉林', value: Math.round(Math.random() * 500) },
                { name: '福建', value: Math.round(Math.random() * 500) },
                { name: '贵州', value: Math.round(Math.random() * 500) },
                { name: '广东', value: Math.round(Math.random() * 500) },
                { name: '青海', value: Math.round(Math.random() * 500) },
                { name: '西藏', value: Math.round(Math.random() * 500) },
                { name: '四川', value: Math.round(Math.random() * 500) },
                { name: '宁夏', value: Math.round(Math.random() * 500) },
                { name: '海南', value: Math.round(Math.random() * 500) },
                { name: '台湾', value: Math.round(Math.random() * 500) },
                { name: '香港', value: Math.round(Math.random() * 500) },
                { name: '澳门', value: Math.round(Math.random() * 500) },
            ], //数据
        },
    ],
}

// 柱状图
const bar = {
    title: {
        text: '服装销量',
        textStyle: {
            align: 'center',
            color: 'rgb(0,137,205)',
        },
        left: 'center',
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
        },
    ],
}

// 环形图
const doughnut = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold',
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' },
            ],
        },
    ],
}

// 饼状图
const circle = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                { value: 335, name: '直达', selected: true },
                { value: 679, name: '营销广告' },
                { value: 1548, name: '搜索引擎' },
            ],
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: ' {b|{b}：}{c}  {per|{d}%}  ' /*{a|{a}}{abg|}{hr|}*/,
                    backgroundColor: '#fff',
                    borderColor: '#409EFF',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center',
                        },

                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0,
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33,
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2,
                        },
                    },
                },
            },
            data: [
                { value: 335, name: '直达' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1048, name: '百度' },
                { value: 251, name: '谷歌' },
                { value: 147, name: '必应' },
                { value: 102, name: '其他' },
            ],
        },
    ],
}

// 红包数据图
const broken = {
    // // 标题
    // title: {
    //     text: '红包活动数据',
    //     subtext: '数据来源r',
    // },
    tooltip: {
        trigger: 'axis',
    },
    //图例名
    legend: {
        data: ['参加活动人数', '分享人数', '关注人数', '注册人数', '领取红包人数'],
    },
    grid: {
        left: '3%', //图表距边框的距离
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    //工具框，可以选择
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    //x轴信息样式
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            '12-01',
            '12-02',
            '12-03',
            '12-04',
            '12-05',
            '12-05',
            '12-06',
            '12-07',
            '12-08',
            '12-09',
            '12-10',
            '12-11',
            '12-12',
            '12-13',
        ],
        //坐标轴颜色
        axisLine: {
            lineStyle: {
                color: 'red',
            },
        },
        //x轴文字旋转
        axisLabel: {
            rotate: 30,
            interval: 0,
        },
    },

    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} 人',
            },
        },
    ],
    series: [
        //虚线
        {
            name: '参加活动人数',
            type: 'line',
            symbolSize: 4, //拐点圆的大小
            color: ['red'], //折线条的颜色
            data: [1000, 300, 500, 800, 300, 600, 500, 800, 300, 500, 800, 300, 600, 500],
            smooth: false, //关键点，为true是不支持虚线的，实线就用true
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'dotted', //'dotted'虚线 'solid'实线
                    },
                },
            },
        },
        //实线
        {
            name: '分享人数',
            type: 'line',
            symbol: 'circle',
            symbolSize: 4,
            itemStyle: {
                normal: {
                    color: 'red',
                    borderColor: 'red', //拐点边框颜色
                },
            },
            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: '关注人数',
            type: 'line',
            //                stack: '总量',
            symbolSize: 4,
            color: ['orange'],
            smooth: false, //关键点，为true是不支持虚线的，实线就用true
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'dotted', //'dotted'虚线 'solid'实线
                    },
                },
            },
            data: [500, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410],
        },
        {
            name: '注册人数',
            type: 'line',
            symbolSize: 4,
            color: ['blue'],
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'dotted', //'dotted'虚线 'solid'实线
                    },
                },
            },
            data: [300, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410],
        },
        {
            name: '领取红包人数',
            type: 'line',
            color: ['green'],
            symbol: 'circle',
            symbolSize: 4,
            data: [310, 352, 280, 334, 373, 310, 340, 300, 350, 280, 350, 340, 370, 310],
            itemStyle: {
                normal: {
                    color: 'green',
                    borderColor: 'green',
                },
            },
        },
    ],
}

const HCA = {
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
}

const HCB = {
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
}

const HCC = {
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
}

const HCD = {
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
}

const optionA = {
    type: 'bar',
    title: {
        text: '最近一周各品类销售图',
    },
    bgColor: '#fbfbfb',
    labels: ['周一', '周二', '周三', '周四', '周五'],
    datasets: [
        {
            label: '家电',
            fillColor: 'rgba(241, 49, 74, 0.5)',
            data: [234, 278, 270, 190, 230],
        },
        {
            label: '百货',
            data: [164, 178, 190, 135, 160],
        },
        {
            label: '食品',
            data: [144, 198, 150, 235, 120],
        },
    ],
}

const optionB = {
    type: 'line',
    title: {
        text: '最近几个月各品类销售趋势图',
    },
    bgColor: '#fbfbfb',
    labels: ['6月', '7月', '8月', '9月', '10月'],
    datasets: [
        {
            label: '家电',
            data: [234, 278, 270, 190, 230],
        },
        {
            label: '百货',
            data: [164, 178, 150, 135, 160],
        },
        {
            label: '食品',
            data: [114, 138, 200, 235, 190],
        },
    ],
}

const optionC = {
    type: 'pie',
    title: {
        text: '服装品类销售饼状图',
    },
    legend: {
        position: 'left',
    },
    bgColor: '#fbfbfb',
    labels: ['T恤', '牛仔裤', '连衣裙', '毛衣', '七分裤', '短裙', '羽绒服'],
    datasets: [
        {
            data: [334, 278, 190, 235, 260, 200, 141],
        },
    ],
}

const optionD = {
    type: 'ring',
    title: {
        text: '环形三等分',
    },
    showValue: false,
    legend: {
        position: 'bottom',
        bottom: 40,
    },
    bgColor: '#fbfbfb',
    labels: ['vue', 'react', 'angular'],
    datasets: [
        {
            data: [500, 500, 500],
        },
    ],
}
