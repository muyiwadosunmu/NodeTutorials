// JavaScript classes
class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust() {
        this.crust = pizzaCrust
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`)
    }
}

const myPizza = new Pizza("pepperoni", "small");
pizza.bake()
console.log(myPizza.type)