// Arrays
const myArray = [];

//Add elements to an array

myArray[0] = "Muyiwa";
myArray[1] = 24;
myArray[3] = false;

//Refer to an array
console.log(myArray);

//Length property
console.log(myArray.length)

// Last element in an array
console.log(myArray[myArray.length - 1]);

//To access an array
console.log(myArray[1]);

// To add to an array at the back
const newLength = myArray.push(43)

// To add to an array infront
console.log(myArray.unshift("JavaScript"))

myArray.splice(1,0,47);
console.log(1)