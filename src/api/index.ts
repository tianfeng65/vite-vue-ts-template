import axios from '../utils/axios'

type DogRes = {
  message: string
  status: string
}
export default function fetchDogImg() {
  return axios.get<any, DogRes>('https://dog.ceo/api/breeds/image/random')
}
