<template>
  <div class="login flex-fr-hc-vc">
    <div>
      <CLogo></CLogo>
      <Form class="loginForm"
            ref="loginData"
            :model="loginData"
            :rules="loginFormRules"
            inline>
        <FormItem prop="username">
          <Input type="text"
                 v-model="loginData.username"
                 placeholder="用户名"
                 @on-enter="loginSubmit">
          <Icon type="ios-person-outline"
                slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password"
                 v-model="loginData.password"
                 placeholder="密码"
                 @on-enter="loginSubmit">
          <Icon type="ios-lock-outline"
                slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary"
                  :loading="loginSubmitLoading"
                  @click="loginSubmit">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import CLogo from '@/components/CLogo'
export default {
  name: 'login',
  components: {
    CLogo
  },
  data() {
    return {
      loginSubmitLoading: false,
      loginData: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ]
      }
    }
  },
  methods: {
    loginSubmit() {
      this.$refs['loginData'].validate().then(valid => {
        if (valid) {
          this.loginSubmitLoading = true
          this.$api.dashboard
            .login(this.loginData)
            .then(({ data }) => {
              if (data.code === '0') {
                this.$store.commit('dashboard/setUserData', data.data)
                this.$router.push('/')
                this.$sysSound.play('login')
              }
            })
            .catch(error => {
              console.log(error)
              this.$sysSound.play('failed')
              this.loginSubmitLoading = false
            })
        } else {
          this.$sysSound.play('failed')
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.login
  width 100%
  height 100%
  background url('~@/assets/images/login-bg.jpg')
  background-size cover
  background-position center

  .loginForm
    margin-top 15px
</style>
