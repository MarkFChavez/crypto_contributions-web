<template>
  <div class='border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg'>
    <div v-if='loading' class='text-center'>
      <img :src='spinner' width='40' />
    </div>

    <div v-else>
      <p class='mb-4 text-center font-hairline text-md tracking-wide uppercase'> All-time contributors </p>

      <ul class='list-reset'>
        <li v-for='c in contributors' :key='c.author.id' class='mb-2'>
          <div class='flex justify-between items-center'>
            <div> 
              <a :href='c.author.html_url' class='font-normal text-xl no-underline text-black'>
                <img :alt='c.author.id' :src='c.author.avatar_url' width='28' height='28' />
                <span class='ml-2 hover:underline'>{{c.author.login}}</span>
              </a> 
            </div>

            <div> 
              <span class='font-normal text-xl'> {{format(c.total)}} </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import numeral from 'numeral'
import spinner from '@/assets/images/audio.svg'

const baseUri = 'https://api.github.com'
const maxRecords = 10

export default {
  data () {
    return {
      loading: false,
      spinner: spinner,
      contributors: [],
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
