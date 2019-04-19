import http from '../plugins/axios'

export function getHomeInfo () {
  let url = 'home'
  return http.get(url)
}

export function getSiteInfo () {
  let url = 'basic'
  return http.get(url)
}

export function getGoodsList (id) {
  let url = `class/${id}`
  return http.get(url)
}

export function getDetailInfo (tid, id) {
  let url = `detail/${tid}/${id}`
  return http.get(url)
}

export function submitOrder (info) {
  let url = 'createOrder'
  return http.orderpost(url, info)
}
