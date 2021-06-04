<template>

    <div class="row">
      <ScrollBar/>
      <AddHotel/>
      
    </div>

</template>

<script>
import ScrollBar from '@/components/CMS/ScrollBar.vue'
import AddHotel from '@/components/CMS/Contents/AddHotel.vue'
export default ({
  components: {
    ScrollBar,
    AddHotel
  }
})
</script>

<style lang="scss" scoped>
  @import  "@/assets/helpers/_dashboard.scss";
</style>