'use strict';
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

var inputRadios = document.querySelectorAll("input[type=radio]");
for (var i = 0; i < inputRadios.length; i++) {
  inputRadios[i].addEventListener(
    "change",
    function (e) {
      var name = e.target.name;
      var value = e.target.value;
      console.log(name+" "+value)
      refreshImage({ name : value });
    }
  );
}
var refreshImage = function (data) {
  if (data["richness"]) {
    sessionStorage.setItem("richness", data["richness"]);
  }
  if (data["topping"]) {
    sessionStorage.setItem("topping", data["topping"]);
  }
  // if (data["flavor"]) {
  //   sessionStorage.setItem("flavor", data["flavor"]);
  // }
  var sommImg = document.getElementById('somm-img');
  var richness = sessionStorage.getItem("richness");
  var topping = sessionStorage.getItem("topping");
  sommImg.src = "img/png/coffee/"+richness+"-"+topping+".png";
}
