<template>
  <div class='container mx-auto h-full flex justify-center items-center'>

    <div class='whitebox xs:w-full sm:w-1/2 w-1/3'>
      <h1 class="font-hairline mb-6 text-center">
        <span class='font-normal'> bitcoin </span> / 
        <a :href='bitcoinUrl' class='text-black underline'> bitcoin </a>
      </h1>

      <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <div v-if='loading' class='text-center'>
          <img :src='spinner' width='40' />
        </div>

        <div v-else>
          <p class='mb-4 text-center font-hairline text-md tracking-wide uppercase'> All-time contributors </p>

          <ul class='list-reset'>
            <li v-for='c in contributors' :key='c.author.id' class='mb-2'>
              <div class='flex justify-between items-center'>
                <div> 
                  <img :alt='c.author.id' :src='c.author.avatar_url' width='28' height='28' />
                  <span class='font-normal text-xl'> {{c.author.login}} </span>
                </div>

                <div> 
                  <span class='font-normal text-xl'> {{format(c.total)}} </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

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
import axios from 'axios'
import numeral from 'numeral'
import spinner from '@/assets/images/audio.svg'

const baseUri = 'https://api.github.com'
const bitcoinUrl = 'https://github.com/bitcoin/bitcoin'
const maxRecords = 10

export default {
  data () {
    return {
      loading: false,
      spinner: spinner,
      bitcoinUrl: bitcoinUrl,
      contributors: []
    }
  },
  created () {
    let bitcoinUrl = `${baseUri}/repos/bitcoin/bitcoin/stats/contributors`

    this.loading = true

    axios.get(bitcoinUrl)
      .then(response => {
        let contributorsByTopCommits = response.data.reverse()
        this.contributors = contributorsByTopCommits.slice(0, maxRecords)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    format (number) {
      return numeral(number).format('0,0')
    }
  }
}
</script>
