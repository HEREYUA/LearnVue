<template>
  <div class="container">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.staffnumber"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.staffpassword"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #5d7599;border: none" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'Login',
  data () {
    return {
      loginForm: {
        staffnumber: '',
        staffpassword: ''
      }
    }
  },
  methods: {
    login () {
    //   var _this = this
    //   this.$axios
    //     .post('/login', {
    //       staffnumber: this.loginForm.staffnumber,
    //       staffpassword: this.loginForm.staffpassword
    //     })
    //     .then(resp => {
    //       if (resp.data.code === 200) {
    //         var data = resp.data.result
    //         _this.$store.commit('login', data.username)
    //         console.log(' data.username:' + data.username)
    //         var path = _this.$route.query.redirect
    //         _this.$router.replace({ path: path === '/' || path === undefined ? '/index' : path })
    //       } else {
    //         this.$alert(resp.data.message, '提示', {
    //           confirmButtonText: '确定'
    //         })
    //       }
    //     })
    //     .catch(failResponse => {})
      this.$router.push('/')
    }

  }

}
</script>
<style>
.container{
    margin-top: 15%;
}
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
