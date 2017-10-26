'use strict';
// Keeps track of Sommelier state and sets it between pages
function initSommelierImageData () {
  if (sessionStorage.getItem("topping") === null ) {
    sessionStorage.setItem("topping","milk");
  }
  if (sessionStorage.getItem("richness") === null) {
    sessionStorage.setItem("richness","dark");
  }
  if (sessionStorage.getItem("flavor") === null) {
    sessionStorage.setItem("flavor","none");
  }
}

var inputRadios = document.querySelectorAll("input[type=radio]");
for (var i = 0; i < inputRadios.length; i++) {
  inputRadios[i].addEventListener(
    "change",
    function (e) {
      var name = e.target.name;
      var value = e.target.value;
      console.log(name+" "+value)
      setImageData({ "name" : name, "value": value });
      refreshImage();
    }
  );
}

var setImageData = function (data) {
  sessionStorage.setItem(data["name"], data["value"]);
};

var refreshImage = function () {
  var sommImgCoffee = document.getElementById('somm-img-coffee');
  var sommImgFlavor = document.getElementById('somm-img-flavor');

  var richness = sessionStorage.getItem("richness");
  var topping = sessionStorage.getItem("topping");
  var flavor = sessionStorage.getItem("flavor");

  sommImgCoffee.src = "img/png/coffee/"+richness+"-"+topping+".png";
  sommImgFlavor.src = "img/icons/flavors/"+flavor+".png"
}

initSommelierImageData();
refreshImage();
