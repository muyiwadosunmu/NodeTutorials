// //var, let and const
// //global scope

// var x = 1;
// let y = 2;
// const z= 3;



// //local scope
// let myFunction = () => {
//     const z = 5
//     console.log(y);
//         //local scope
//     {
//         const y = 4;
//         console.log(y);
//     }
// }
// myFunction()

var x = 1;
let y = 2;
const z= 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x =10; //function scoped
    const z=5; //block scoped
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

//const and let are both blocked scoped while var is function scoped

    {
        var x = 11;
        const z = 6;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
}
