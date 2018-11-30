<template>
  <div class='container px-2 py-2'>
    <Header></Header>

    <div v-if='loading' class='py-4'> Loading contributors... </div>

    <div v-else class='contributors py-4'>
      <div v-for='c in contributors' :key='c.author.id'>
        <span> 
          {{ c.author.login }} with 
          <span class='font-bold'>{{ c.total }}</span> 
          commits.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import axios from 'axios'

const BASE_URI = 'https://api.github.com'

export default {
  data () {
    return {
      loading: false,
      contributors: []
    }
  },
  created () {
    let bitcoinUrl = `${BASE_URI}/repos/bitcoin/bitcoin/stats/contributors`

    this.loading = true

    axios.get(bitcoinUrl)
      .then(response => {
        let contributorsByTopCommits = response.data.reverse()
        this.contributors = contributorsByTopCommits.slice(0, 5)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      })
  },
  components: { Header }
}
</script>
