import axios from 'axios'

const http = {
  get: function (url) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(process.env.VUE_APP_API_URL + url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  load: function (url) {
    return new Promise((resolve, reject) => {
      // Object.assign(params)
      axios.get(url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  orderpost: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(process.env.VUE_APP_ORDER_URL + url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  post1: function (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(process.env.VUE_APP_ORDER_URL + url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
export default http
