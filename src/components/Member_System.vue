<template>
<form class="login-content position-absolute top-50 start-50 translate-middle" @submit.prevent="signin">
    <div class="form-floating row justify-content-center">
      <input class="form-control w-50"
      id="floatingInput"
      placeholder="name@example.com"
      v-model="user.username"
      >
      <label for="floatingInput">Email帳號</label>
    </div>
    <div class="form-floating row justify-content-center">
      <input type="password"
      class="form-control w-50 "
      id="floatingPassword"
      placeholder="Password"
      v-model="user.password"
      >
      <label for="floatingPassword">Password</label>
    </div>
    <button type="submit" class="btn btn-primary">登入</button>
  </form>
</template>

<script>
export default {
  name: 'MemberSystem',
  data () {
    return {
      user: {
        username: '',
        password: '',
        token: ''
      },
      wannalogin: true
    }
  },
  props: {
  },
  methods: {
    signin () {
      let re = /gmail.com$/
      const token = 'asds32adsavrAS3Fadf5567'
      const username = this.user.username
      const password = this.user.password
      if (username.search(re) > 0) {
        // 假如有符合gmail.com格式就寫入cookies
        console.log('寫入token')
        this.user.token = token
        this.$cookies.set('login', JSON.stringify(this.user))
      }

      if (this.$cookies.get('login') && this.user.token) {
        // 去資料庫讀取會員帳號密碼
        this.$http.post(process.env.VUE_APP_LOGIN, {
          username: username,
          password: password
        }).then((res) => {
          if (res.data === '登入成功') {
            this.$emit('login', false)
            this.$router.push({name: 'About'})
          }
        })
      }
    },
  }
}
</script>