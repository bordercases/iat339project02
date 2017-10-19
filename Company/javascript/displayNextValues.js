// objective: show and hide an element based on the value of a slider
// data: the slider, the elements of the DOM that are affected
// we'll specify this under "slider-wrapper"

// select elements determined by slider
var sliderOptions = document.getElementsByClassName('slider-option');
// initialize all as hidden
for (var i = 0; i < sliderOptions.length; i++) {
  var sliderOption = sliderOptions[i];
  sliderOption.style.display = "none"
}

// set the current value as not hidden
var sliderInput = document.getElementsByTagName('input');
var firstValue = sliderOptions.length - (parseInt(sliderInput[0].value))
sliderOptions[firstValue].style.display = "inline"

document.addEventListener("input", function(event) {
  for (var i = 0; i < sliderOptions.length; i++) {
    var sliderOption = sliderOptions[i];
    if (i != (sliderOptions.length - parseInt(event.target.value))) {
      sliderOption.style.display = "none"
    } else {
      sliderOption.style.display = "inline"
    }
  }
});

// * findun hidden element and turn it off
// ** We could probably cache this
// * find the new element and turn it on
// var sliderInput = slider.getElementsByClassName('slider-range-wrapper').input;
// var currentInputValue = sliderInput.value;
// detect slider change and apply remapping function to elements
