import axios from "axios"

const testRequest = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com/",
  withCredentials: true,
})

export default testRequest