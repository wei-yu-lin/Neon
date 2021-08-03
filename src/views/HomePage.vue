<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 ">
        <div class="card mb-1">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://fakeimg.pl/210x170/" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--第二張card -->
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://fakeimg.pl/210x170/" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button @click="get">按我</button>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
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

import { initPage,getGeolocation } from '@/tools/googleApi.js'

export default {
  setup() {
    const get = () => {
      getGeolocation()
    }
    initPage()
    return{
      get
    }
  }
};
</script>
