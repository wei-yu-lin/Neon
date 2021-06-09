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
                  <img :src="modifyModal.Picture1"
                  class="card-img-top mb-3">
                  <button type="button"
                  class="btn btn-outline-primary col-6"
                  data-bs-toggle="button" autocomplete="off">Upload</button>
                </div>
                <div class="card-body">
                  <label class="col-form-label">圖片說明</label>
                  <textarea class="form-control"
                  v-model="modifyModal.Description"
                  rows="7"/>
                </div>
              </div>


              <div class="col-6">
                  <label class="col-form-label">超連結:</label>
                  <input type="text" class="form-control" v-model="modifyModal.Website">
              </div>
           </div>
        </div>
       <div class="modal-footer">
          <button type="button" class="btn btn-primary">確認修改</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
    }
  },
  computed:{    
  }

})
</script>