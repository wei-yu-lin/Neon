<template>


  <div class="modal fade " :id="'id_modifyData'+ index" tabindex="-1">
     <div class="modal-dialog modal-xl">
      <div class="modal-content">
       <div class="modal-header">
          <h5 class="modal-title">修改資料</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
         <div class="modal-body">
           <div class="row">
              <div class="col-6 card border-light">
                <div class="card-header text-center ">
                  <div class="input-group mb-3">
                    <span class="input-group-text">順序</span>
                    <div class="col-sm-2">
                      <input type="text" class="form-control" v-model="childIdx">
                    </div>
                  </div>
                  <img :src="childProducts.Picture1"
                  class="card-img-top mb-3">
                  <form class="row">
                      <div :class="{'col-sm-11':status.fileUploading,'col-sm-10':status.cancel}">
                        <input type="file"
                        class="form-control"
                        :id="'imagefile'+ index"
                        ref="files"
                        accept ="image/jpeg,image/png"
                        @change="uploadImage">
                      </div>
                      <div v-if="status.fileUploading" class="col-sm-1 d-flex align-items-center">
                        <font-awesome-icon  icon="spinner" pulse/>
                      </div>
                      <div v-if="status.cancel" class="col-sm-2">
                        <button  class="btn btn-outline-danger" @click="cancelUpload">取消</button>
                      </div>
                  </form>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="col-form-label">圖片說明</label>
                  <textarea class="form-control"
                  v-model="childProducts.Description"
                  rows="7"/>
                </div>
                <div class="mb-3">
                  <label class="col-form-label">超連結:</label>
                  <input type="text" class="form-control" v-model="childProducts.Website">
                </div>
              </div>
           </div>
        </div>
       <div class="modal-footer">
          <button type="button" class="btn btn-primary"
          @click="$emit('editComplete', childProducts, childIdx)"
          data-bs-dismiss="modal">確認修改</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="getPhoto(1)">取得</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  props :{
    modifyModal:{
      type: Object,
      require: true
    },
    index:{
      type: Number,
      require: true
    }
  },
  data(){
    return{
      status: {
        fileUploading: false,
        cancel: false
      },
       childProducts: JSON.parse(JSON.stringify(this.modifyModal)),
       childIdx: this.index
    }
  },
  methods: {
    uploadImage(){
      const file = this.$refs.files.files[0];
      const formData = new FormData();
      const vm = this;
      let url = "https://listenn-reservation-app.herokuapp.com/api/images/upload"
      formData.append('file', file);
      vm.status.fileUploading = true;
      this.$http.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      }).then((response) => {
          if (response.data){
            vm.status.fileUploading = false;
            vm.status.cancel = true;
            vm.getPhoto(response.data.imageId);
          }
      });
    },
    getPhoto(Id){
      let url = `https://listenn-reservation-app.herokuapp.com/api/images/${Id}`;
      const vm = this;
      this.$http.get(url).then(async (res) => {
       await vm.$set(vm.childProducts, 'Picture1', res.data.imagePath)
      })

    },
    cancelUpload(){
      this.$http.delete(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
          }
      }).then((response) => {
        console.log(response.data);
        vm.status.fileUploading = false;
        vm.status.cancel = false;
      });
    }
  },

})
</script>