class Pizza{  //The underscore (_) is meant to tell other developers that the properties are private and not to be tampered with outside the classes
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }

    setCrust (pizzaCrust) {
        this._crust = pizzaCrust
    }
}

class SpecialtyPizza extends Pizza{
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice()


//Factory Function another way to define objects in JS with the aim of not being able to change properties
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake : () => console.log(`Baking a ${size} crust pizza.`)
//     };
// }

// mypizza = pizzaFactory("small");
// mypizza.bake();