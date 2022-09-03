// JavScript Errors and Error Handling
"use strict"
const makeError = () => {
    try {
        const name = "Muyiwa";
        name = "Dele"
    } catch (err) {
        console.error(err) //we could use .warn(err)
                            //.table(err)
    }                        //error(err.stack) shows a more detailed value
}
makeError()

