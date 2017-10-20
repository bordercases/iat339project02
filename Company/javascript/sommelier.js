// Keeps track of Sommelier state and sets it between pages

if (sessionStorage.getItem("topping") === null ) {
    sessionStorage.setItem("topping","milk");
}
if (sessionStorage.getItem("richness") === null) {
  sessionStorage.setItem("richness","dark");
}

var richness = sessionStorage.getItem("richness");
var topping = sessionStorage.getItem("topping");

// set sommelier image to the current variables
var sommImg = document.getElementById('somm-img');
sommImg.src = "img/png/coffee/"+richness+"-"+topping+".png";
