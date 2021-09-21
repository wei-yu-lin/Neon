<template>
  <div class="container-fulid border">
    <div class="card">
      <img class="card-img-top mb-3" />
      <form class="row">
        <div class="col-sm-11">
          <input
            type="file"
            class="form-control"
            ref="files"
            accept="image/jpeg,image/png"
            @change="uploadImage"
          />
        </div>
        <div class="col-sm-1 d-flex align-items-center">
          <font-awesome-icon icon="spinner" pulse />
        </div>
        <div class="col-sm-2">
          <button class="btn btn-outline-danger" @click="cancelUpload">
            取消
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/custom/_dashboard.scss";
</style>
