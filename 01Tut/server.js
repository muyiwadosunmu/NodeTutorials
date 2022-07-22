//console.log("Hello World")
//console.log(global)

// const os = require("os")
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

//console.log(__dirname())
//console.log(__filename())

//What we did below is basically destructuring
const {add, subtract, multiply, divide } = require("./math")
console.log(add(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))
console.log(subtract(2,3))