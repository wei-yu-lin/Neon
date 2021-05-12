<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Neon</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class="{'nav-link': true, active: isActive.Login}" :to="{name:'Login'}">登入</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="{'nav-link':true , active: isActive.About}" :to="{name:'About'}">介紹</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default({
  data() {
    return{
      isActive:{
        Login: false,
        About: false
      }
    }
  },
  computed:{
  },
  watch:{
    $route:{
      handler: function(Val,oldVal){
        // console.log("Val=",Val.name,"oldVal=",oldVal);
        if (Val.name === 'Login'){
          this.isActive.Login = true
          this.isActive.About = false
        }
        else{
          this.isActive.About = true
          this.isActive.Login = false
        }
      },
      deep: true
    }

  },
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
