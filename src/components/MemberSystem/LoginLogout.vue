<template>
  <div class="header-profile">
    <div class="d-flex">
      <template v-if="LoginCookies">
        <router-link
          class="me-2 btn btn-outline-success"
          :to="{ name: 'LoginForm' }"
        >
          登入
        </router-link>
      </template>
      <template v-else>
        <ul class="navbar-nav align-items-center ml-auto ml-md-0">
          <li class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
              <span class="avatar avatar-sm rounded-circle">
                <img src="img/theme/team-4.jpg" />
              </span>
              {{ username }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <router-link class="dropdown-item" :to="{ name: '個人資料' }">
                  <font-awesome-icon icon="user"/>
                  <span>個人資料</span>
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
                </li>
              <li>
                <button class="dropdown-item" @click="LogOut">登出</button>
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </div>
  </div>

  <ul class="navbar-nav align-items-center ml-auto ml-md-0">
    <li :class="[{ 'nav-item': true }]"></li>
  </ul>
</template>

<script>
import { delCookies } from "@/tools/cookies";
export default {
  name: "LoginLogout",
  methods: {
    LogOut() {
      delCookies("login");
      this.$router.push({ name: "LoginForm" });
    },
  },
  props: {
    LoginCookies: {
      type: Boolean,
      default: true,
    },
    username: {
      type: String,
    },
  },
};
</script>
