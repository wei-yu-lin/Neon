<template>
  <form class="container">
    
    <div class="row mb-3">
        <label class="col-sm-3 col-form-label">帳號</label>
        <div class="col-9 col-sm-6">
          <div class="input-group">
            <input type="text" class="form-control" aria-label="帳號" v-model="profile_userId">
            <span class="input-group-text" id="basic-addon1">@</span>
            <select class="form-select" aria-label="select email">
              <option value="@gmail.com">gmail</option>
              <option value="@yahoo.com.tw">yahoo</option>
            </select>
          </div>
        </div>
    </div>
    <div class="row mb-3">
        <label class="col-sm-3 col-form-label">密碼</label>
        <div class="col-9 col-sm-6">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">姓氏</span>
            <input type="text" class="form-control" aria-label="使用者名稱" :value="$store.state.user.username">
            <span class="input-group-text" id="basic-addon1">名子</span>
            <input type="text" class="form-control" aria-label="使用者名稱" :value="$store.state.user.username">
          </div>
        </div>
    </div>
    <div class="row">
        <label class="col-sm-3 col-form-label text-primary">使用者名稱</label>
        <div class="col-9 col-sm-3">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">名子</span>
            <input type="text" class="form-control" aria-label="使用者名稱" :value="user.username">
          </div>
        </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      user:{},
    }
  },
  props: {
  },
  methods: {
  },
  computed:{
    profile_userId:{
      get(){
        const userId = this.user.user_id 
        if (userId){
          
        }

        return 
      }
    }
  },
  mounted() {
    this.user = this.$store.state.user
  },
}
</script>