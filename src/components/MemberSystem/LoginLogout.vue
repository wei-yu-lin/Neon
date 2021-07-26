<template>
    <div class="d-flex">
        <router-link v-if="LoginCookies" class="me-2 btn btn-outline-success"
        :to="{ name: 'LoginForm'}">登入</router-link>
        <div v-else class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{$store.state.user.username }}歡迎
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
  name: 'LoginLogout',
  methods:{
    LogOut(){
      this.$cookies.remove('login');
      this.$store.commit('SET_STATUS',true);
      this.$router.push({name:'LoginForm'})
    }
  },
  props:{
    LoginCookies: {
      type: Boolean,
      default: true
    }
  }
}
</script>
