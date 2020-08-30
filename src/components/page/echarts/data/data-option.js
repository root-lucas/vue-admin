export { map, bar, doughnut, circle, broken }

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
