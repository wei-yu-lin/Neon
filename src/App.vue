<template>
  <div id="app">
    <header class="sticky-top">
      <nav class=" navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">Neon</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'HomePage'}">首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'Management'}">後臺管理</router-link>
              </li>
            </ul>
            <login
            :LoginCookies="wannalogin"
            />
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import login from '@/components/MemberSystem/LoginLogout.vue'
  import {ref} from 'vue'
  export default {
    setup() {
      const wannalogin = ref(false);
      components:[login]
      return {
        wannalogin
      }
    }
  }
</script>


<style lang="scss">
@import "@/assets/main.scss";
</style>
