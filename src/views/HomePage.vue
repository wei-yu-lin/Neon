<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col-sm-6">
        <div v-for="(data, index) in hotelData" :key="index" class="card mb-1">
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
                <a href="#" class="stretched-link"
                @mouseover="hoverListItem(index)"
                @mouseleave="leaveListItem(index)"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--底下是地圖 -->
      <div id="map" ref="map" class="col-6 d-none d-sm-block vh-100 position-fixed start-50 end-0 "></div>
    </div>
  </div>
</template>
<script>
import { mapInit, getGeolocation } from "@/tools/googleApi.js";
import axios from "axios";
export default {
  async setup() {
    const hotelData = (await axios.get(process.env.VUE_APP_PRODUCT)).data;
    mapInit(hotelData);
    const hoverListItem = (index) => {
      const coords = hotelData[index].coordinates;
      getGeolocation(coords,index,false);
    };
    const leaveListItem = (index) => {
      const coords = hotelData[index].coordinates;
      getGeolocation(coords,index,true);
    };

    return {
      hoverListItem,
      leaveListItem,
      hotelData,
    };
  },
  beforeUnmount() {

  }
};
</script>
