<template>
    <div class="error-page">
        <div class="error-code">4<span>0</span>3</div>
        <div class="error-desc">啊哦~ 你没有权限访问该页面哦</div>
        <div class="error-handle">
            <router-link to="/">
                <el-button type="primary" size="large">返回首页</el-button>
            </router-link>
            <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        },
    },
}
</script>

<style scoped>
.error-code {
    line-height: 1;
    font-size: 250px;
    font-weight: bolder;
    color: #f02d2d;
}
.error-code span {
    color: #00a854;
}
.error-btn {
    margin-left: 100px;
}
</style>
