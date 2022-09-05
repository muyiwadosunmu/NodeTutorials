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

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs)

// To alter some parameters on the web page of selected evenDivs
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "dark blue"; 
    /* evenDivs[i].style.backgroundColor = "100px";
    evenDivs[i].style.height = "200px"; */
}


const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "Hello World";
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello ! <p> This shoul align right<p><h1/>"
view1.style.display = "none";

view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexwrap.margin = "10px";

while (view2.lastChild) {
    view2.lastChild.remove();
}


const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}
// createDivs(view2, 10);

for (let i =1;i<= 12, i++) {
    createDivs(view2,i)
}