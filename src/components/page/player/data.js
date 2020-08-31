export { mp4, Hls }

const mp4 = {
    id: 'mse1',
    url: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-360p.mp4',
    poster: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
    autoplay: false,
    volume: 0.6, //预设音量大小
    lang: 'zh-cn', //控件语言
    // download: true, //提供下载
    // playsinline: true,
    fluid: true, //使播放器宽度跟随父元素的宽度大小变化
    definitionActive: 'hover', // 清晰度切换按钮
    videoInit: true, //加载首屏
    playbackRate: [0.5, 0.75, 1, 1.5, 2], //快进设置
    pip: true, //画中画
    lang: 'zh-cn',
    thumbnail: {
        pic_num: 44,
        width: 160,
        height: 90,
        col: 10,
        row: 10,
        urls: ['http:////s3.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-thumbnail.jpg'],
    },
    danmu: {
        comments: [
            {
                duration: 25000,
                id: '1',
                start: 3000,
                txt: 'lucas长弹幕长弹幕长弹幕长弹幕lucas长弹幕长弹幕长弹幕长弹幕lucas长弹幕长弹幕长弹幕长弹幕lucas长弹幕长弹幕长弹',
                style: {
                    //弹幕自定义样式
                    color: '#ff9500',
                    fontSize: '20px',
                    border: 'solid 1px #ff9500',
                    borderRadius: '50px',
                    padding: '5px 11px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
            },
        ],
        area: {
            start: 0,
            end: 1,
        },
    },
    // height: '600px',
    // width: '600px',
    whitelist: [''],
}

const Hls = {
    id: 'mse2',
    url: 'http://ivi.bupt.edu.cn/hls/cctv2.m3u8',
    // poster: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
    autoplay: false,
    volume: 0.6, //预设音量大小
    lang: 'zh-cn', //控件语言
    // download: true, //提供下载
    // playsinline: true,
    fluid: true, //使播放器宽度跟随父元素的宽度大小变化
    videoInit: true, //加载首屏
    playbackRate: [0.5, 0.75, 1, 1.5, 2], //快进设置
    pip: true, //画中画
    lang: 'zh-cn',
    danmu: {
        comments: [
            {
                duration: 25000,
                id: '1',
                start: 3000,
                txt: 'lucas长弹幕长弹幕长弹幕长弹幕lucas长弹幕长弹幕长弹幕长弹幕lucas长弹幕长弹幕长弹幕长弹幕lucas长弹幕长弹幕长弹',
                style: {
                    //弹幕自定义样式
                    color: '#ff9500',
                    fontSize: '20px',
                    border: 'solid 1px #ff9500',
                    borderRadius: '50px',
                    padding: '5px 11px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
            },
        ],
        area: {
            start: 0,
            end: 1,
        },
    },
}
