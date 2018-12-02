<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-1/3">
      <h1 class="font-semibold mb-6 text-center">
        bitcoin / bitcoin
      </h1>

      <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">

        <div v-if='loading' class='text-center'>
          <img :src='spinner' width='40' />
        </div>

        <ul class='list-reset' v-else>
          <li v-for='c in contributors' :key='c.author.id' class='mb-1'>
            <div class='flex justify-between items-center'>
              <div> 
                <img :src='c.author.avatar_url' width='28' height='28' />
                <span class='font-normal text-xl'> {{c.author.login}} </span>
              </div>

              <div> 
                <span class='font-normal text-xl'> {{c.total}} </span>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import spinner from '@/assets/images/audio.svg'

const BASE_URI = 'https://api.github.com'
const MAX_RECORDS = 10

export default {
  data () {
    return {
      loading: false,
      spinner: spinner,
      contributors: []
    }
  },
  created () {
    let bitcoinUrl = `${BASE_URI}/repos/bitcoin/bitcoin/stats/contributors`

    this.loading = true

    axios.get(bitcoinUrl)
      .then(response => {
        let contributorsByTopCommits = response.data.reverse()
        this.contributors = contributorsByTopCommits.slice(0, MAX_RECORDS)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
