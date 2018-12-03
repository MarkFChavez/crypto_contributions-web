<template>
  <h1 class="font-hairline mb-6 text-center">
    <span class='font-normal'> {{owner}} </span> / 
    <a 
      :href='repoUrl' 
      class='text-black underline'> 
      {{repo}} 
    </a>
  </h1>
</template>

<script>
export default {
  props: ['owner', 'repo'],
  data () {
    return {
      repoUrl: `https://github.com/${this.owner}/${this.repo}`
    }
  }
}
</script>
