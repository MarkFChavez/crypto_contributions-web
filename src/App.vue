<template>
  <div class='container mx-auto xs:h-auto h-full flex justify-center items-center'>
    <div class='whitebox xs:w-full sm:w-1/2 w-1/3'>
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  }
}
</script>
