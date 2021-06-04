<template>
  <div id="app">
    <nav class=" navbar navbar-expand-lg sticky-top navbar-light bg-light shadow">
      <div class="container-fluid ">
        <a class="navbar-brand" href="#">Neon</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class="{'nav-link': true, active: isActive.HomePage}" :to="{name:'HomePage'}">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="{'nav-link':true , active: isActive.Management}" :to="{name:'Management'}">後臺管理</router-link>
            </li>
          </ul>
          <login
          :LoginCookies="wannalogin"
          />
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import login from '@/components/MemberSystem/LoginLogout.vue'

export default({
  data() {
    return{
      isActive:{
        HomePage: false,
        Management: false
      }
    }
  },
  computed:{
    wannalogin(){
      return this.$store.state.wannalogin
    }
  },
  watch:{
    $route:{
      handler: function(Val,oldVal){
        // console.log("Val=",Val.name,"oldVal=",oldVal);w
        if (Val.name === 'HomePage'){
          this.isActive.HomePage = true
          this.isActive.Management = false
        }
        else if(Val.name === 'Management'){
          this.isActive.Management = true
          this.isActive.HomePage = false
        }
        else{
          this.isActive.HomePage = false
          this.isActive.Management = false
        }
      }
    },
  },
  components:{
    login
  },
  created() {
    if (this.$cookies.get('login')) {
      this.$store.dispatch('readUser')
    }
  },
})
</script>


<style lang="scss">
@import "@/assets/main.scss";
</style>
