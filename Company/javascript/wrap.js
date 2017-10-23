"use strict";

// switch the sommelier form blocks to the sidebar
var emToPix = function(ems) { var pixels = ems*16; return pixels; };
// when we switch behavior
var emBarrier = 50;

var defaultSommControl = 0;

window.addEventListener(
  "resize",
  function (e) {
    var width = window.innerWidth;
    if (width <= emToPix(emBarrier)) {
      // hide sommelier controls
      var sommControls = document.querySelectorAll(".somm-control");
      var sommNav = document.querySelectorAll(".somm-nav");
      for (var i = 0; i < sommControls.length; i++) {
        sommControls[i].style.display = "none";
        sommNav[i].style.display = "none"
      }
      // unhide active one
      sommControls[defaultSommControl].style.display = "block";
      sommNav[i].style.display = "block";
      // switch to the vertical version
    } else if (width > emToPix(emBarrier)) {
      // unhide sommelier controls
      var sommControls = document.querySelectorAll(".somm-control");
      for (var i = 0; i < sommControls.length; i++) {
        sommControls[i].style.display = "block";
        sommNav[i].style.display = "block"
      }
    }
  }
);
