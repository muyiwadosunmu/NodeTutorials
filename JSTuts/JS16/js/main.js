// Objects in JavaScript
// key-value pairs in curly braces

const myObj = { name: "Muyiwa"};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function(){
        return `Time for ${this.beverage.morning}`;
    }
};
console.log(anotherObj.beverages.morning[0]);
console.log(anotherObj.action());
