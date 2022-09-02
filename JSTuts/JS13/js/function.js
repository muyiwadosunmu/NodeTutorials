// Another way functions are declared using bare variable names.
const getUserNameFromEmail = function(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("user@github.com"))

//Another way is through arroew functions
const getUserNameFromEmail2 = (email) => {
    return email.slice(0, email.indexOf("@"));
}
const toProperCase = (clientName) => {
    return clientName.charAt(0).toUpperCase() + clientName.slice(1).toLowerCase();

}
console.log(toProperCase("muyiwaDOsunMu"))