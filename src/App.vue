<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios'
import {provide,onBeforeMount,reactive} from 'vue'
export default {
  data() {
    return {
      hotelData:[]
    }
  },
  async created() {

  },
  setup() {
    const hotelData = reactive([]);
      provide('hotelData',hotelData);
    onBeforeMount(async () => {
      hotelData.push(...(await axios.get(process.env.VUE_APP_PRODUCT)).data);
    })

  }
}
</script>

<style lang="scss">
@import "@/assets/sass/main.scss";
</style>
