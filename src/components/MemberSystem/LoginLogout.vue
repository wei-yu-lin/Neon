<template>
<div class="header-profile">
    <div class="d-flex">
        <router-link v-if="LoginCookies" class="me-2 btn btn-outline-success"
        :to="{ name: 'LoginForm'}">登入</router-link>
        <div v-else class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
            {{username}}
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
  </div>

</template>

<script>

export default {
  name: 'LoginLogout',
  methods:{
    LogOut(){
    }
  },
  props:{
    LoginCookies: {
      type: Boolean,
      default: true
    },
    username:{
      type: String
    }
  }
}
</script>
