<template>
  <form class="container needs-validation" novalidate>
    <div class="row mb-3">
        <label class="col-3 col-form-label">帳號</label>
        <div class="col-9 col-sm-6">
          <div class="input-group">
            <input type="text" class="form-control" aria-label="帳號" v-model="profile_userId[0]">
            <span class="input-group-text" id="basic-addon1">@</span>
            <select class="form-select" aria-label="select email" v-model="profile_userId[1]">
              <option value="gmail">gmail</option>
              <option value="yahoo">yahoo</option>
            </select>
          </div>
        </div>
    </div>
    <div class="row mb-3 align-items-center">
        <label class="col-3 col-form-label">密碼</label>
        <div class="col-7 col-sm-3 ">
          <div class="input-group has-validation">
            <input id="password" type="password" class="form-control" :value="$store.state.user.password" required>
            <div class="invalid-feedback">
              密碼不能為空
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="password" @click="show_password">
            <label class="form-check-label">顯示密碼</label>
          </div>
        </div>
    </div>
    <div class="row mb-3">
        <label class="col-3 col-form-label text-primary">使用者名稱</label>
        <div class="col-9 col-sm-3">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">名子</span>
            <input type="text" class="form-control" aria-label="使用者名稱" :value="user.username">
          </div>
        </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit" @click="done">儲存</button>
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
    done(){
      const forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    },
    show_password(){
      const pwd = document.getElementById('password')
      if(pwd.type === "password"){
        pwd.type = "text"
      } else {
        pwd.type = "password"
      }
    }
  },
  computed:{
    profile_userId:{
      get(){
        const userId = this.user.user_id
        if (userId){
          let Arr_user = userId.split(/[@.]/)
          return Arr_user
        }
      },
      set(){}
    }
  },
  created(){
    this.user = this.$store.state.user
  },
}
</script>