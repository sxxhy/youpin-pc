// detail
export const resetArr = function (arr, name) { // 数组去重
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i][name]) === -1) {
      arr1.push(arr[i][name])
    }
  }
  return arr1
}

export const sureSelect = function ({ arr, value, name1, name2, name3 }) { // 规格选择
  let arr1 = arr.filter((item) => {
    return item[name1] === value
  })
  return { val1: arr1[0][name2], val2: arr1[0][name3] }
}

// cart
export const cartList = function (arr1, arr2, name) {
  let orderGoods = {}
  for (let i = 0; i < arr1.length; i++) {
    orderGoods[`name${i}`] = {}
    orderGoods[`name${i}`]['parentName'] = arr1[i]
    orderGoods[`name${i}`][`list`] = []
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j][name] === arr1[i]) {
        orderGoods[`name${i}`][`list`].push(arr2[j])
      }
    }
  }
  return orderGoods
}

// menu
export const menuReset = function (arr) { // 获取的菜单数据重组
  let setArr = []
  let leng = 0
  if (arr.length % 2 === 0) {
    leng = arr.length / 2
  } else leng = (arr.length - 1) / 2
  for (let i = 0; i < leng; i++) {
    setArr[i] = []
    setArr[i].push(arr[2 * i])
    setArr[i].push(arr[2 * i + 1])
  }
  return setArr
}

export const creditPlgin = function ({ id, ele, src }) { // 动态加载js
  document.getElementById(id) && document.getElementById(id).remove()
  var element = document.createElement(ele)
  var app = document.getElementById('app')
  element.id = id
  element.src = src
  app.parentElement.insertBefore(element,app)
}
