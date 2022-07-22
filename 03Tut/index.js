const { format } = require("date-fns");

console.log(format(new Date(),"yyyyMMdd\tHH:mm:ss" ))

// const logEvents = require('./logEvents');



// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter{};

// //initialize object
// const myEmitter = new MyEmitter();

// //add listener for the log event
// myEmitter.on("log", (msg) => logEvents(msg));
// setTimeout(() => { 
//     //Emit event
//     myEmitter.emit("log event emitted", '');
// }, 2000);
