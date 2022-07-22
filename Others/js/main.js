// console.log("Hello world")
import User from "./user.js";
import playGuitar from "./guitars.js"; //to import default module
import { shredding as shred, plucking as fingerpicking} from "./guitars.js";

const me = new User("email@mail.com", "Muyiwa","123456");
console.log(me);
console.log(me.greeting());


console.log(playGuitar());
console.log(shred());
console.log(fingerpicking());

