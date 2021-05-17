<template>
    <div class="d-flex">
        <router-link v-if="LoginCookies" class="me-2 btn btn-outline-success"
        :to="{ name: 'LoginForm'}">登入</router-link>
        <div v-else class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{this.$store.state.user.username }}歡迎
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
            <li>
              <router-link class="dropdown-item"
              :to="{name: '個人資料'}">個人資料</router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><button class="dropdown-item" @click="LogOut">登出</button></li>
          </ul>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
    LogOut(){
      this.$cookies.remove('login');
      this.$store.state.wannalogin = true;
    }
  },
  props:{
    LoginCookies: {
      type: Boolean,
      default: true
    }
  },
  beforeMount:
    function () {
      if (this.$cookies.get('login')) {
        this.$store.state.wannalogin = false
        this.$store.state.user.username = this.$cookies.get('login').username
        this.$store.state.user.user_id = this.$cookies.get('login').user_id
        this.$store.state.user.password = this.$cookies.get('login').password
      }
    }
}
</script>
