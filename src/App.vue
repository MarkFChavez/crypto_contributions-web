<template>
  <div class='container mx-auto xs:h-auto h-full flex justify-center items-center'>
    <div class='absolute pin-r pin-t'>
      <ul class='list-reset flex py-4'>
        <li class='mr-6'> 
          <router-link 
            class='text-blue hover:text-blue-darker no-underline border-b border-blue-darker' 
            :to='{ name: "root" }'>
            bitcoin
          </router-link>
        </li>

        <li class='mr-6'> 
          <router-link 
            class='text-blue hover:text-blue-darker no-underline border-b border-blue-darker' 
            :to='{ name: "ethereum" }'>
            ethereum
          </router-link>
        </li>
      </ul>
    </div>

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
