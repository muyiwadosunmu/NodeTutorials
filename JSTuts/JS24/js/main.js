// Loops
let fname = "Dave";
for (let i = 0; i < fname.length; i++) {
    console.log(fname.charAt(i));
}

let newName = "Muyiwa";
let counter = 0;
let myLetter;
while(true) {
    myLetter = newName[counter];
    console.log(myLetter);
    if (myLetter === "v" ) break
    counter++;
}