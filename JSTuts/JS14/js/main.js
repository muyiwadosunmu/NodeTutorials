//var, let and const

// const and let are block scoped while var is fuction scoped

//global scope
var x = 1;
let y = 2;
const z = 3;

//local scope
{
    let y = 4
    // y is a local scope here
}

//local scope
const myFunc = () =>{
    let x = 5
    // x is a local variable here
}
console.log(x)