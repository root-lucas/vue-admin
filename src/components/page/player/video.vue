<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-video-camera"></i>视频播放</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-divider content-position="left">视频地址采用cdn加速服务 </el-divider>
            <el-row :gutter="30">
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-card shadow="hover" :body-style="{ display: 'flex', justifyContent: 'center', alignItems: 'center' }">
                        <div slot="header">播放传统MP4格式</div>
                        <div id="mse1"></div>
                    </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-card shadow="hover" :body-style="{ display: 'flex', justifyContent: 'center', alignItems: 'center' }">
                        <div slot="header">播放m3u8格式，且不暴露视频地址</div>
                        <div id="mse2"></div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Player from 'xgplayer'
import HlsPlayer from 'xgplayer-hls'
import { mp4, Hls } from './data'
export default {
    data() {
        return {
            playerMp4: '',
            playerHls: '',
        }
    },
    mounted() {
        // 播放 mp4
        this.playerMp4 = new Player(mp4)

        // mp4 清晰度事件
        this.playerMp4.emit('resourceReady', [
            { name: '超清', url: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-720p.mp4' },
            { name: '高清', url: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-480p.mp4' },
            { name: '标清', url: 'http://h5player.bytedance.com/video/mp4/xgplayer-demo-360p.mp4' },
        ])

        // 播放 m3u8
        this.playerHls = new HlsPlayer(Hls)
    },
}
</script>

<style>
.ad {
    justify-content: center;
    align-items: center;
}
</style>
