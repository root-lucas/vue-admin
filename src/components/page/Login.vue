<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input type="text" v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="param.password" @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="loginyzm">
                    <el-input type="text" placeholder="输入验证码" v-model="param.loginyzm" style="width: 40%;" />
                    <div
                        @click="randyzm()"
                        style="display: inline-block;margin:0 30px;text-align: center; width: 90px;font-size: 20px; height: 35px; color: #2b3b4b;background-color: #1ea7fe"
                    >
                        {{ yzmn }}
                    </div>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            yzmn: '',
            yzm: '',
            param: {
                username: 'admin',
                password: 'admin',
                loginyzm: '',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                loginyzm: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
            },
        }
    },
    created() {
        this.randyzm()
    },
    methods: {
        submitForm() {
            this.$refs.login.validate((valid) => {
                if (valid) {
                    if (this.param.loginyzm.toUpperCase() != this.yzm.toUpperCase()) {
                        // alert('验证码不正确！！！')
                        this.$message.error('验证码不正确')
                        // this.randyzm()
                        return
                    }
                    this.$message.success('登录成功')
                    localStorage.setItem('ms_username', this.param.username)
                    this.$router.push('/')
                } else {
                    if (this.param.loginyzm == '') {
                        this.$message.error('请输入验证码')
                        return
                    }
                    this.$message.error('请输入账号和密码')
                    console.log('error submit!!')
                    return false
                }
            })
        },
        randyzm() {
            //生成随机验证码
            let code = ''
            let coden = ''
            var codeLength = 4 //验证码的长度
            //随机数字符
            var random = new Array(
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z',
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z'
            )
            for (var i = 0; i < codeLength; i++) {
                //循环操作
                var index = Math.floor(Math.random() * 62) //取得随机数的索引（0~61）
                code += random[index] //根据索引取得随机数加到code上
                coden += random[index] + ' ' //根据索引取得随机数加到code上
            }
            this.yzm = code //把code值赋给验证码
            this.yzmn = coden //把code值赋给验证码
        },
    },
}
</script>

<style lang="scss" scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/img/logo-bg.jpg');
    background-size: 100% 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 30px;
    color: #fff;
}
</style>
