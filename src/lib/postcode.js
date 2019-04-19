/* eslint-disable camelcase,semi,key-spacing,keyword-spacing */
import http from '../plugins/axios'
var Address_List = [];

export default {
  load: async (money) => {
    if (money === 'S$' || money === '￥') return
    let url = '/json/' + money + '.json'
    const data = await http.load(url)
    Address_List = data
    return data
  },
  get: (money, name, addressId) => {
    let address_list = []
    if (addressId === 'city') {
      if (Address_List && Address_List.length > 0) {
        if (money === '฿') {
          // address_list.push({ city: `จังหวัด/ Province` })
          for (let info of Address_List) {
            address_list.push({ city: info.city })
          }
        }
        if (money === 'RM') {
          // address_list.push({ city: `Province` })
          for (let info of Address_List) {
            address_list.push({ city: info.city })
          }
        }
        if (money === 'NT') {
          // address_list.push({ city: `城市` })
          for (let info of Address_List) {
            address_list.push({ city: info.city })
          }
        }
        if (money === 'HK') {
          // address_list.push({ city: `区域` })
          for (let info of Address_List) {
            address_list.push({ city: info.city })
          }
        }
        if (money === 'Rp') {
          // address_list.push({ city: `Province` })
          for (let info of Address_List) {
            address_list.push({ city: info.city })
          }
        }
        if (money === '₫') {
          // address_list.push({ city: `Province` })
          for (let info of Address_List) {
            address_list.push({ city: info.city })
          }
        }
        if (money === '円') {
          for (let info of Address_List) {
            address_list.push({ city: info.city })
          }
        }
      }
    } else if (addressId === 'area') {
      if (Address_List && Address_List.length > 0) {
        if (money === '฿') {
          // address_list.push({ area: 'เมือง' })
          Address_List.map((info) => {
            if (info.city === name) {
              address_list = address_list.concat(info.area)
            }
          })
        } else if (money === 'RM') {
          // address_list.push({ area: 'City' })
          Address_List.map((info) => {
            if (info.city === name) {
              address_list = address_list.concat(info.area)
            }
          })
        } else if (money === 'NT') {
          // address_list.push({ area: '區縣' })
          Address_List.map((info) => {
            if (info.city === name) {
              address_list = address_list.concat(info.area)
            }
          })
        } else if (money === 'HK') {
          // address_list.push({ area: '區' })
          Address_List.map((info) => {
            if (info.city === name) {
              address_list = address_list.concat(info.area)
            }
          })
        } else if (money === 'Rp') {
          // address_list.push({ area: 'City' })
          Address_List.map((info) => {
            if (info.city === name) {
              address_list = address_list.concat(info.area)
            }
          })
        } else if (money === '₫') {
          // address_list.push({ area: 'City' })
          Address_List.map((info) => {
            if (info.city === name) {
              address_list = address_list.concat(info.area)
            }
          })
        }
      }
    } else if (addressId === 'code') {
      address_list.push({ postcode: '' })
      Address_List.map((info) => {
        let area = info.area
        area.map((item) => {
          if (item.area === name) {
            address_list = address_list.concat(item.postcode)
          }
        })
      })
    }
    return address_list;
  },
  // 添加偏远地区
  addRemote: async (body) => {
    let url = '/remote'
    return http.post(url, body)
  },
  // 获取偏远地区信息
  init_remote: async () => {
    let url = '/remote'
    return http.get(url)
  },
  // 删除偏远地区
  deleteRemote: async (id) => {
    let url = '/remote/' + id
    return http.get(url)
  }
}
