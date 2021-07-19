<template>

    <div class="row">
      <ScrollBar/>
      <main class="col-lg-10 col-md-9 ms-sm-auto px-md-4">
        <router-view/>
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
