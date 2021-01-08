let arr = ['1', '1', '2', '3']
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.fill('a', 0))
// console.log(arr.slice(0, 1))
// console.log(arr.splice(0, 1, 'a'))
// console.log(arr)
let newArr = arr.find(item => {
  return item == '1'
})
console.log(newArr)
