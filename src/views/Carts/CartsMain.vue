<template>
  <nav class="navbar navbar-light navbar-expand-lg bg-body py-3 ">
    <div class="container">
      <a class="navbar-brand fs-1" href="#">{{ $route.params.Name }}</a>
    </div>
    <div class="navbar-barnd-line"></div>
  </nav>

  <div class="container">
    <div class="row ">
      <div class="col-6 ">
        <div id="Core" class="carousel slide " data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(data, index) in hotelImage"
              :key="index"
              :class="{ 'carousel-item': true, active: index === 0 }"
            >
              <img
                :src="data"
                class="rounded d-block w-100"
                width="545"
                height="550"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#Core"
            id="prevButton"
          >
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#Core"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="page-outward">
          <ul class="page-content">
            <li class="carousel__slide carousel__slide--thumbnail">
              <img
                class="carousel-img"
                src="https://picsum.photos/id/237/300/300"
              />
            </li>
            <li class="carousel__slide carousel__slide--thumbnail">
              <img
                class="carousel-img"
                src="https://picsum.photos/id/233/300/300"
              />
            </li>
            <li class="carousel__slide carousel__slide--thumbnail">
              <img
                class="carousel-img"
                src="https://picsum.photos/id/231/300/300"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <div class="card container pt-3">
          <div class="accommodation-footer">
            <div class="star">
              <span class="d-flex align-items-center">
                <span>
                  <font-awesome-icon class="text-danger me-1" icon="star" />
                </span>
                <span class="">
                  4
                  {{aaa}}
                </span>
                <button @click="aaaq">點我</button>

              </span>
            </div>
            <div class="price">420</div>
          </div>

          <div class="card-body">
            <div class="mb-4 card-text"></div>
            <button type="primary" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import {useRouter} from 'vue-router'
export default {
  props:{
    hotelValue:{
      type: Object,
      description: 'The hotel value that from Accommodation.vue'
      }
  },
  data() {
    return {
      aaa: JSON.stringify(this.hotelValue)
    }
  },
  setup() {
    let hotelImage = reactive([]);
    const aa = useRouter();
    console.log(aa.params);
    onBeforeMount(() => {
      for (let i = 0; i < 6; i++) {
        hotelImage.push(`https://picsum.photos/200/300?random=${i}`);
      }
    });
    return {
      hotelImage,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/custom/_cartMain.scss";
</style>
