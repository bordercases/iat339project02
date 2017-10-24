'use strict';

// var nameofVariable= object.property
window.innerWidth;
var windowWidth= window.innerWidth;
console.log("window width= "+ windowWidth+ "px");

// takes in a css selector, willonly find the first one (querySelectorAll finds all)
var navDefault=document.querySelector("#nav-default");
var navToggle=document.querySelector("#nav-toggle");
var navItems=document.querySelector("#nav-items");
var navFirstItem=document.querySelector("#nav-items a");


if (windowWidth<500) {
  console.log("Window width is less than 500px, collapsing menu");

  // classList expllicitly specify it s aast
  navDefault.classList.add("hidden");
  navToggle.classList.remove("hidden");
  navItems.classList.add("hidden");
}

//acccessibility tool support
navToggle.setAttribute("aria-hidden","false");
navItems.setAttribute("aria-hidden","true");
navItems.setAttribute("aria-labelledby","nav-toggle");

//when hamburger is clicked, show the nav list
navToggle.addEventListener("click",function(){
  console.log("navToggle has been clicked");

  if (navItems.classList.contains("hidden")) {
    console.log("navitems hidden, showing now");

    navItems.classList.remove("hidden");//showing items

    //acccessibility
    navItems.setAttribute("aria-hidden","false ");
    navToggle.setAttribute("aria-expanded","true ");

    //jumps to first menu item right away(a variable here);
    navFirstItem.focus();

  }else {
    navItems.classList.add("hidden");
    navItems.setAttribute("aria-hidden","true ");
    navToggle.setAttribute("aria-expanded","false ");
  }
});

//when window is resized, show mobile nav
window.addEventListener("resize",function(){
  var width= document.documentElement.clientWidth;
  // console.log("window width:"+ width);

  if (width<500) {
    console.log("mobile nav hidden, showing it now");

    //hide default nav, show mobile nav
    navDefault.classList.add("hidden");
    navToggle.classList.remove("hidden");//showing mobile nav
    navItems.classList.add("hidden");

    //jumps to first menu item right away(a variable here);
    navFirstItem.focus();

  }else {
    navItems.classList.add("hidden");
    navToggle.classList.add("hidden");
    navDefault.classList.remove("hidden");
  }
});
