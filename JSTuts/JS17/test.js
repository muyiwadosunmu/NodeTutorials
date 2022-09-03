// JavaScript Classes
class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
} 

// For naming conventions we could refactor our codes to tell other
// developers that we intend to make the properties above private
// They shouldn't be modified outsde of the class