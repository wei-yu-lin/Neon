<template>
  <div
    id="map"
    ref="map"
    class="col-6 d-none d-sm-block vh-100 position-fixed start-50 end-0 "
  />
</template>
<script>
import { onMounted, watch, inject } from "vue";
import { useMap } from "@/tools/googleApi.js";
export default {
  setup() {
    const hotelData = inject("hotelData");
    onMounted(async () => {
      const { addMarker } = await useMap();
      watch(hotelData, addMarker, { deep: true });
    });
  },
};
</script>
