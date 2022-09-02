const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// Destructuring Objects
// 
const { vocals, guitar, bass, drums } = band;
console.log(guitar)
console.log(vocals)

const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

function sings({ vocals }) {
    return `${vocals} singd`
}
console.log(sings(band))