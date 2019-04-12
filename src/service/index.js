import http from '../plugins/axios'

export function getHomeInfo () {
  let url = 'home'
  return http.get(url)
}

export function getSiteInfo () {
  let url = 'basic'
  return http.get(url)
}
