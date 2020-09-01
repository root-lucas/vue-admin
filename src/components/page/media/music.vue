<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-video-pause"></i>音频播放</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div id="music1" style="margin-bottom:20px"></div>
            <el-button type="primary" @click="addMusic">添加一首音乐</el-button>
        </div>
    </div>
</template>

<script>
import 'xgplayer'
import Music from 'xgplayer-music'
export default {
    data() {
        return {
            playerMusic: '',
        }
    },
    mounted() {
        this.playerMusic = new Music({
            id: 'music1',
            url: [
                {
                    src: 'http://h5player.bytedance.com/video/music/audio.mp3',
                    name: '林宥嘉·脆弱一分钟',
                    vid: '000001', //vid歌曲唯一编号
                    poster: './林宥嘉.jpg',
                },
                {
                    src: 'http://music.163.com/song/media/outer/url?id=64317.mp3',
                    name: '王菲·因为爱情',
                    vid: '000002',
                    poster: './王菲.jpg',
                    // poster: 'http://p2.music.126.net/GGYQjJ-zDEivv9l6QgJUFg==/109951163020567917.jpg?param=130y130',
                },
            ],
            volume: 0.8,
            width: 900,
            height: 80,
            preloadNext: true,
            switchKeepProgress: false,
        })
    },
    methods: {
        // 添加并切换音乐
        addMusic() {
            this.playerMusic.add({
                src: 'http://music.163.com/song/media/outer/url?id=1457707546.mp3',
                name: 'Taylor Swift·Love Story',
                vid: '000002',
                poster: 'http://h5player.bytedance.com/video/music/poster-small.jpeg',
            })
            this.playerMusic.setIndex(2) // 根据歌曲数组顺序
        },
    },
}
</script>

<style></style>
