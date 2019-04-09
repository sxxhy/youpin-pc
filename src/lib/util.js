
export const resetArr = function (arr, name) { // 数组去重
  let arr1 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i][name]) === -1) {
      arr1.push(arr[i][name])
    }
  }
  return arr1
}
