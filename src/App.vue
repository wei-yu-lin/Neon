<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Neon</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class="{'nav-link': true, active: isActive.HomePage}" :to="{name:'HomePage'}">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="{'nav-link':true , active: isActive.About}" :to="{name:'About'}">介紹</router-link>
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
import login from './views/LoginLogout.vue'

export default({
  data() {
    return{
      isActive:{
        HomePage: false,
        About: false
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
          this.isActive.About = false
        }
        else if(Val.name === 'About'){
          this.isActive.About = true
          this.isActive.HomePage = false
        }
        else{
          this.isActive.HomePage = false
          this.isActive.About = false
        }
      }
    },
  },
  components:{
    login
  }
})
</script>


<style lang="scss">
@import "@/assets/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
