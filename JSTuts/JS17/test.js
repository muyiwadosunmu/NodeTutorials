// JavaScript Classes
    // Using Factory functions
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza `)
    }
}const myPizza = pizzaFactory("small");
myPizza.bake();

// class Pizza {
//     constructor(pizzaSize) {
//         this._size = pizzaSize;
//         this._crust = "original";
//     }
//     getCrust() {
//         return this.crust;
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust
//     }
// } 

// For naming conventions we could refactor our codes to tell other
// developers that we intend to make the properties above private
// They shouldn't be modified outsde of the class