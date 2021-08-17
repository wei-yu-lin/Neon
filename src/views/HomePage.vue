<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <div v-for="(data, index) in hotel_data" :key="index" class="card mb-1">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="data.Picture1" class="img-fluid card-body" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ data.Name }}</h5>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <a href="#" class="stretched-link" @mouseover="get"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--底下是地圖 -->
      <div id="map" ref="map" class="col-6 d-none d-sm-block vh-100"></div>
    </div>
  </div>
</template>
<script>
import { googleMap,getGeolocation } from "@/tools/googleApi.js";
import axios from "axios";
export default {
  async setup() {
    const hotel_data = (await axios.get(process.env.VUE_APP_PRODUCT)).data;
    const googleInstance = new googleMap(hotel_data);
    googleInstance.loaderMap()
    const get = () => {
      getGeolocation();
    };

    return {
      get,
      hotel_data,
    };
  },
};
</script>
