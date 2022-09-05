// JavaScript Event Listeners



document.addEventListener("readystatechange", (event) =>{
   if(event.target.readyState === "complete" ) {
    console.log("readyState: complete")
    initApp();
   } 
})

const initApp = () => {
    const view2 = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        event.stopPropagation();
        view.style.backgroundColor = "purple";
    }, false)

    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    }, false)

    h2.addEventListener("click", (event) => {
        event.stopPropagation();
        event.target.textContent = "Clicked";
    }, false)
};