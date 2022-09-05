// DOM - Document Object Model

// Methode1
const view1 = document.getElementById("view1");
console.log(view1)

// Method 2
const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";

view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views)

const sameViews = document.querySelectorAll(".view")
console.log(sameViews);

const divs = view1.querySelectorAll("divs")
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth of type(2n)");
console.log(evenDivs)

// To alter some parameters on the web page of selected evenDivs
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "dark blue"; 
    /* evenDivs[i].style.backgroundColor = "100px";
    evenDivs[i].style.height = "200px"; */
}
