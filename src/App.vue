<template>
  <div class='container mx-auto xs:h-auto h-full flex justify-center items-center'>
    <div class='whitebox xs:w-full sm:w-1/2 w-1/3'>

      <Header></Header>
      <Contributors></Contributors>

      <Footer></Footer>

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contributors from '@/components/Contributors'

export default {
  components: {
    Header,
    Footer,
    Contributors,
  }
}
</script>
