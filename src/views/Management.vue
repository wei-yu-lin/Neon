<template>

    <div class="row">
      <ScrollBar/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>
      </main>
    </div>

</template>

<script>
import ScrollBar from '@/components/CMS/ScrollBar.vue'
export default ({
  components: {
    ScrollBar
  }
})
</script>
