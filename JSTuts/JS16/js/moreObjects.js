// More on Objects

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};
console.log(Object.keys(band));
console.log(Object.values(band));

// A special type of iteration for Objects
// for-in loop
for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// To delete a method or properties
// delete band.drums;