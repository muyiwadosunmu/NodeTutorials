// DOM - Document Object Model

// Methode1
const view1 = document.getElementById("view1");
console.log(view1)

// Method 2
const view2 = document.querySelector("view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views)