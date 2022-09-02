const myArray = ["A", "B", "C", "D", "E", "F"]

// New Array returns values from index 2
const new1Array = myArray.slice(2)
console.log(new1Array)

// Array methods include
    // .splice() - helps to delete and return
    // .reverse() - revesres the order of an array
    // .join() Creates an new string of an array
    // This string created can be returned back to an Array using th split() method

// concat() helps to join 2 arrays
// const myArrayA = ["A", "B", "C"]
// const myArrayB = ["D", "E", "F"]
// const newArray = myArrayA.concat(myArrayB)


// A newer way is by using the Spread operator
const newArray = [...myArrayA, ...myArrayB]
