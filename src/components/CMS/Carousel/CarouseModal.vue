<template>

            
  <div class="modal fade" id="id_modifyData" tabindex="-1">
     <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-header">
          <h5 class="modal-title">修改資料</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
         <div class="modal-body">
          <form>
            <img src="" class="img-thumbnail">
            <div class="mb-3">
              <label class="col-form-label">超連結:</label>
              <input type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label class="col-form-label">圖片說明:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
       <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">確認修改</button>
        </div>
      </div>
    </div>
    {{modifyModal.Add}}
  </div>
</template>

<script>
export default ({
  props :{
    modifyModal:{
      type: Object
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