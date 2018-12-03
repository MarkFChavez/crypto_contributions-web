import axios from 'axios'

const baseUri = 'https://api.github.com'

export default {
  getContributors (owner, repo) {
    let url = `${baseUri}/repos/${owner}/${repo}/stats/contributors`
    return axios.get(url)
  }
}
