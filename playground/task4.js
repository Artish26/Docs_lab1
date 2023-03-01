const lodash = require('lodash')

let arr = [123,23,256,1,12]

let m = lodash.max(arr) //Выводит наибольшее число
console.log(m)

let n = lodash.chunk(arr,2) //Делит масив на куски
console.log(n)

let a = lodash.drop(arr,2) //Откидывает n елементов с начала
console.log(a)

let s = lodash.indexOf(arr,23) //Выводит индекс числа(если не нашло, то -1)
console.log(s)

let d = lodash.last(arr) //Выводит последние елемент масива
console.log(d)

