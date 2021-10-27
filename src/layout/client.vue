<template>
  <base-navbar/>
  <main>
    <AccItemList/>
  </main>
</template>
<script>
import AccItemList from "@/views/Accommodation//AccItemList";
import axios from 'axios'
import {provide,onBeforeMount,reactive} from 'vue'
import BaseNavbar from "@/components/Navbar/BaseNavbar.vue"
export default {
  components: {
    BaseNavbar,
    AccItemList
  },
  setup() {
      const hotelData = reactive([]);
      provide('hotelData',hotelData);
        console.log("client created");
      onBeforeMount(async () => {
        console.log("client onBeforeMount");
        hotelData.push(...(await axios.get(process.env.VUE_APP_PRODUCT)).data);
      })
  }

}
</script>
