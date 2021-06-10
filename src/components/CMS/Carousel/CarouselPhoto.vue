<template>
  <div class="container-fulid">
      <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">排序</th>
          <th scope="col">圖片</th>
          <th scope="col">超連結</th>
          <th scope="col">圖片說明</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in main" :key="index+item">
          <th class="col-1" scope="row">{{index}}</th>
          <td class="col-3">
            <img class="img-thumbnail" :src="item.Picture1">
          </td>
          <td class="col-3">{{item.Website}}</td>
          <td class="col-3">
              <textarea class="form-control overflow-auto" rows="7" v-model="item.Description"></textarea>
          </td>
          <td class="col-2">
           <div class="container">
                <button class="btn btn-info" type="button"
                data-bs-toggle="modal"
                :data-bs-target="'#id_modifyData'+index"
                >修改</button>
                <button class="btn btn-danger" type="button" @click="delData(index)">刪除</button>
           </div>
          <CarouseModal
          :modify-modal=item
          :index=index
          />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import test from '@/server/test.json'
import CarouseModal from './CarouseModal.vue'

export default ({
  data() {
    return {
      main:[]
    }
  },
  methods: {
    delData(index){
     this.main.splice(index,1)
    }
  },
  computed: {
  },
  created() {
    this.main = test     
  },
  components: {
    CarouseModal
  }
})
</script>
<style lang="scss" scoped>
  @import "@/assets/helpers/_dashboard.scss"
</style>