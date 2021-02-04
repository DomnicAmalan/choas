import Axios from 'axios'

const DecathalonInstance = Axios.create({
  baseURL: "https://sports.api.decathlon.com",
})

export const allSports  = async() => {
  let {data} = await DecathalonInstance.get('/sports')
  return data.data
}