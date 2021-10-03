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
                <div class="card-text ">
                  <header>
                    <span class="room-description">{{ data.Description }}</span>
                  </header>
                  <div
                    class="border-top border-warning mt-1"
                    style="width:32px"
                  ></div>
                  <small
                    v-for="(item, index) in data.feature"
                    :key="index"
                    class="text-muted"
                    >{{ item }}</small
                  >
                  <div class="d-flex" style="height:80px">
                    <div class="accommodation-footer">
                      <div class="star">
                        <span class="d-flex align-items-center">
                          <span>
                            <font-awesome-icon
                              class="text-danger me-1"
                              icon="star"
                            />
                          </span>
                          <span class="">
                            {{ data.star }}
                          </span>
                        </span>
                      </div>
                      <div class="price">{{ data.price }}</div>
                    </div>
                  </div>
                </div>
                <router-link
                  href="#"
                  :hotel-value="data"
                  class="stretched-link"
                  :to="{
                    name: 'CartsMain',
                    params: {
                      Zone: data.Zone, //String
                      id: index, //Object
                    },
                  }"
                  @mouseover="hoverListItem(index)"
                  @mouseleave="leaveListItem(index)"
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--底下是地圖 -->
      <div
        id="map"
        ref="map"
        class="col-6 d-none d-sm-block vh-100 position-fixed start-50 end-0 "
      ></div>
    </div>
  </div>
</template>
<script>
import CartsMain from "@/views/Carts/CartsMain.vue";
import { useMap } from "@/tools/googleApi.js";
import { onBeforeMount, onMounted, reactive, watch, inject } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    CartsMain,
  },
  setup() {
    const router = useRouter();

    let hoverListItem,leaveListItem;

    const hotelData = inject('hotelData');
     onMounted(async () => {
      console.log("hekkoi");
      const {addMarker,setMarkerAnimation} = await useMap();
      hoverListItem = (index) => {
        const coords = hotelData[index].coordinates;
        setMarkerAnimation(coords, index, false);
      };
      leaveListItem = (index) => {
        const coords = hotelData[index].coordinates;
        setMarkerAnimation(coords, index, true);
      };


      watch(hotelData, addMarker,{deep:true});
    });



    const openCartForm = (index) => {
      const Zone = hotelData[index].Zone;
      const Name = hotelData[index].Name;
      router.push({
        name: "CartsMain",
        params: { Zone, Name, index },
      });
    };
    return {
      hoverListItem,
      leaveListItem,
      openCartForm,
      hotelData,
    };
  },
};
</script>

<style lang="scss" scoped>
.room-description {
  line-height: 24px;
  max-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
