// objective: show and hide an element based on the value of a slider
// data: the slider, the elements of the DOM that are affected
// we'll specify this under "slider-wrapper"

// 
// var sommForms = document.querySelectorAll(".somm-control form");
// for (var i = 0; i < sommForms.length; i++) {
//   sommForms[i].addEventListener("change", function (e) {
//     // console.log("value"+" "+e.target.value);
//   });
// }


// // var sliderInput = document.getElementById('sliderInputWrapper').getElementsByTagName('input')[0];
// var currentParentHeight = window.getComputedStyle(document.getElementById('sliderInputWrapper').parentNode).height;
// // sliderInput.style.width =  currentParentHeight;
// window.addEventListener('resize', function(){
//   var currentParentHeight = window.getComputedStyle(document.getElementById('sliderInputWrapper').parentNode).height;
//   sliderInput.style.width =  currentParentHeight;
// }, true);
//
// // select elements determined by slider
// var sliderOptions = document.getElementsByClassName('slider-option');
// var sliderContents = document.getElementsByClassName('slider-content');
// // initialize all as hidden
// for (var i = 0; i < sliderOptions.length; i++) {
//   var sliderOption = sliderOptions[i];
//   sliderOption.style.display = "none"
// }
// for (var i = 0; i < sliderContents.length; i++) {
//   var sliderContent = sliderContents[i];
//   sliderContent.style.display = "none"
// }
//
// // set the current value as not hidden
// var firstValue = sliderOptions.length - (parseInt(sliderInput.value))
// sliderOptions[firstValue].style.display = "inline"
// sliderContents[firstValue].style.display = "inline"
//
// document.addEventListener("input", function(event) {
//   var currentOptIndex = (sliderOptions.length - parseInt(event.target.value));
//   for (var i = 0; i < sliderOptions.length; i++) {
//     var sliderOption = sliderOptions[i];
//     var sliderContent = sliderContents[i];
//
//     if (i != currentOptIndex) {
//       sliderOption.style.display = "none"
//       sliderContent.style.display = "none"
//
//     } else {
//       sliderOption.style.display = "inline"
//       sliderContent.style.display = "inline"
//     }
//   }
//   // one of: "richness", "topping", "flavorant"
//   var sommType = document.getElementById('somm-type').name;
//   // store the result
//   sessionStorage.setItem(sommType, sliderOptions[currentOptIndex].id);
//   // set image
//   document.getElementById('somm-img').src =
//     "img/png/coffee/"+sessionStorage.getItem("richness")+"-"+sessionStorage.getItem("topping")+".png";
// });

// * findun hidden element and turn it off
// ** We could probably cache this
// * find the new element and turn it on
// var sliderInput = slider.getElementsByClassName('slider-range-wrapper').input;
// var currentInputValue = sliderInput.value;
// detect slider change and apply remapping function to elements
