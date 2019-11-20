import axios from 'axios'

const URL = 'http://numbersapi.com'

const ajax = axios.create({
  baseURL: URL,
})

export const fetchNumberFact = (num: number, factType: string) => {
  return ajax.get(`/${num}/${factType}`)
}
