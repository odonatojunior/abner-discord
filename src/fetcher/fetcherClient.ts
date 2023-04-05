import { Axios } from 'axios'

const fetcherClient = new Axios({
  headers: {
    'Content-Type': 'application/json',
  },
})

export default fetcherClient
