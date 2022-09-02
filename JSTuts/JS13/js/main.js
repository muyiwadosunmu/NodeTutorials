// Functions

// Methods => Built-in functions

// Function Declarations

// We prepared in case num2 is undefiined
function sum(num1, num2) {
    if (num2 === undefined ) {
        return num1 + num2;
    } 
    return num1 + num2;
}

// A function to return username from email
function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("a"));
}
console.log(getUserNameFromEmail('user@gmail.com'))