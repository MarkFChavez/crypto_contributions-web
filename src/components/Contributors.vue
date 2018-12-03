<template>
  <div>
    <Header :owner='owner' :repo='repo' />
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
  </div>
</template>

<script>
import Header from '@/components/Header'
import numeral from 'numeral'
import spinner from '@/assets/images/audio.svg'
import service from '@/services/api'
import { mapState } from 'vuex'

export default {
  props: ['owner', 'repo'],
  data () {
    return {
      spinner: spinner,
    }
  },
  computed: {
    ...mapState(['loading', 'contributors'])
  },
  mounted () {
    this.$store.dispatch('startLoading')

    let params = { 
      owner: this.owner, 
      repo: this.repo 
    }

    this.$store.dispatch('getContributors', params)
      .catch(error => console.log(error))
      .finally(() => {
        this.$store.dispatch('stopLoading')
      })
  },
  methods: {
    format (number) {
      return numeral(number).format('0,0')
    }
  },
  components: {
    Header
  }
}
</script>
