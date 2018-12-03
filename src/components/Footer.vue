<template>
  <div class="text-center">
    <span class='font-hairline'> 
      Made by 
      <a href='https://twitter.com/MarkFChavez' class='text-black underline'>Mark</a>.
    </span>

    <div class='mt-2'>
      <router-link 
        class='text-blue hover:text-blue-darker no-underline' 
        :to='{ name: "root" }'>
        bitcoin
      </router-link> 
      &gt;
      <router-link 
        class='text-blue hover:text-blue-darker no-underline' 
        :to='{ name: "ethereum" }'>
        ethereum
      </router-link>
      &gt;
      <router-link 
        class='text-blue hover:text-blue-darker no-underline' 
        :to='{ name: "stellar" }'>
        stellar
      </router-link>
    </div>

    <div class='mt-2'>
      <a 
        class='github-button' 
        href='https://github.com/mrkjlchvz/crypto_contributions-web' 
        data-size='large' 
        data-show-count='true' 
        aria-label='Star mrkjlchvz/crypto_contributions-web on GitHub'>Star</a>
    </div>
  </div>
</template>
