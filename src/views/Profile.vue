<template>
  <form class="container mt-5 needs-validation" novalidate>
      <div class="row justify-content-center align-items-center mb-3 ">
          <label class="col-sm-2 col-3 col-form-label">帳號</label>
          <div class="col-sm-6 col-9 ">
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

      <div class="row justify-content-center align-items-center mb-3">
          <label class="col-sm-2 col-3 col-form-label">密碼</label>
          <div class="col-sm-4 col-9">
            <div class="input-group has-validation">
              <input type="password" id="password" class="form-control" :value="passWord" required>
              <div class="invalid-feedback">
                密碼不能為空
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" @click="show_password">
              <label class="form-check-label">顯示密碼</label>
            </div>
          </div>
      </div>

      <div class="row justify-content-center align-items-center mb-3">
          <label class="col-sm-2 col-3 col-form-label text-primary">使用者名稱</label>
          <div class="col-sm-6 col-9">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">名子</span>
              <input type="text" class="form-control" aria-label="使用者名稱" :value="userName">
            </div>
          </div>
      </div>

      <div class="d-flex justify-content-center">
          <button class="btn btn-primary me-2" type="submit" @click="done">儲存</button>
          <button class="btn btn-secondary" type="button" @click="$router.back()">返回上頁</button>
      </div>
    </form>



</template>

<script>
import {getCookies} from '@/tools/cookies';
export default {
  methods: {
    done(){
      const forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms).forEach((form) => {
          form.addEventListener('submit',(event) => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
    },
    show_password(){
      let pwd = document.getElementById('password')
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
        const userId = this.userId
        if (userId){
          let Arr_user = userId.split(/[@.]/)

          return Arr_user
        }
      },
      set(){}
    }
  },
  created(){
    this.userId = getCookies('login').user_id
    this.userName = getCookies('login').username
    this.passWord = getCookies('login').password
  }
}
</script>