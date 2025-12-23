let name1 = "Aditya"
// console.log(typeof score) // string
let name2 = null;
// console.log(typeof (name)) // object
let name3;
// console.log(typeof age) // undefined

let name = "Aditya"
let valueInNumber = Number(name)
console.log(valueInNumber) // NaN(Not a Number)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let valueInBoolean = Boolean(name)
console.log(valueInBoolean) // true

// 1 => true; 0 => false (when number is 1 or 0)
// "" => false
// "hitesh" => true


let someNumber = 99
let stringNumber = String(someNumber)
console.log(stringNumber)

let someBoolean = true
let stringBoolean = String(someBoolean)
console.log(stringBoolean)