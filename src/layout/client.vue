<template>
  <base-navbar/>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import BaseNavbar from "@/components/Navbar/BaseNavbar.vue"
export default {
  components: {
    BaseNavbar
  }

}
</script>
