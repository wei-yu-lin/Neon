<template>
  <header class="sticky-top">
    <nav class=" navbar navbar-expand-lg navbar-light border bg-light">
      <div class="container-fluid header">
        <div class="header-menu navbar-collapse">
          <router-link class="navbar-brand" :to="{ name: 'HomePage' }"
            >Neon</router-link>
          <div class="user-navbar">
            <router-link class="menu-link " :to="{ name: 'HomePage' }"
              ><font-awesome-icon icon="hotel" />住宿</router-link
            >
            <a class="menu-link ">
              <font-awesome-icon icon="shopping-cart" />購物車
            </a>
            <router-link class="menu-link " :to="{ name: 'Admin' }"
              >後臺管理</router-link
            >
          </div>
          <login :LoginCookies="wannalogin" :username="username" />
        </div>
      </div>
    </nav>
  </header>
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      Loading....
    </template>
  </Suspense>
</template>
<script>
import login from "@/components/MemberSystem/LoginLogout.vue";
import { checkLogin } from "@/tools/cookies";
import { ref } from "vue";

export default {
  components: {
    login,
  },
  setup() {
    let wannalogin = ref(true);
    let username = ref("");
    if (checkLogin()) {
      wannalogin.value = false;
      username.value = checkLogin().username;
    }
    return {
      wannalogin,
      username,
    };
  },
};
</script>
