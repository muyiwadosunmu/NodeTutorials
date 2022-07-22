//Conditionals: If Statements

//Syntax
if (condition) {
    //run code
} //run somd diff code
let customerISBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerISBanned) {
    reply = `there is no ${soup} for you`
} else if (soup && crackers) {
    reply = `Here is your order od]f ${soup} & crackers`
} else if (soup) {
    reply = `Here's your order of ${soup}`
} else {
    reply = "Sorry we're out of orders"
}
console.log(reply)



//-------------------------------------------------

if (playerOne === computer) {
    //tie game
} else if (playerOne === "rock") {
    if (computer === "paper ") {
        //computer wins
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
    //playerOne wins
    } else {
        
    }
} 
    //playerOne wins