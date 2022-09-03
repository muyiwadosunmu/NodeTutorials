// JSON: JavaScript Object Notation

/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent
Many languages utilizes JSON..... not just in JavaScript
*/

const myObj = {
    name: "Dave",
    hobbies: ["eat", 'sleep', "code"],
    hello: function () {
        console.log("Hello!");
    }
}
console.log(myObj);
console.log(myObj.name);
myObj.hello();

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON)

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON)
console.log(typeof receiveJSON)

/* While converting to JSON, any methods in the Object is nullified 
(lost) upon conversion back to Object