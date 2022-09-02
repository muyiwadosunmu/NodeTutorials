const vehicle = {
    wheels: 4,
    engine(){
        return "Vroom"
    }
};

const truck = Object.create(vehicle); // Inheritance
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "Whooosh"
};
console.log(car.engine)

const tesla = Object.create(car);
tesla.engine = function() {
    return "Shhhh....."
};
console.log(tesla.engine())