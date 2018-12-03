<template>
  <div class='container mx-auto xs:h-auto h-full flex justify-center items-center'>
    <div class='whitebox xs:w-full sm:w-1/2 w-1/3'>

      <Header></Header>
      <Contributors></Contributors>

      <div class="text-center">
        <span class='font-hairline'> 
          Made by 
          <a href='https://twitter.com/MarkFChavez' class='text-black underline'>Mark</a>.
        </span>

        <div class='mt-2'>
          <a 
            class='github-button' 
            href='https://github.com/mrkjlchvz/crypto_contributions-web' 
            data-size='large' 
            data-show-count='true' 
            aria-label='Star mrkjlchvz/crypto_contributions-web on GitHub'>Star</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Contributors from '@/components/Contributors'

export default {
  components: {
    Header,
    Contributors,
  }
}
</script>
