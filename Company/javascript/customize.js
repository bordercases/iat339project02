'use strict';

// boot up the elements containing the images and reset their display properties
// to be more in accord with document defaults. This will make them display
// like they're taking up half the screen, which is only useful when interactivity
// is enabled.
document.querySelector(".img-block").style.display = "block";
var containerBlocks = document.querySelectorAll(".container > .block");
for (var i = 0; i < containerBlocks.length; i++) {
  containerBlocks[i].style.flexBasis = "36.5em";
}

// Keeps track of Sommelier state and sets it between pages
function initSommelierImageData() {
    if ( sessionStorage.getItem( "topping" ) === null ) {
        sessionStorage.setItem( "topping", "milk" );
    }
    if ( sessionStorage.getItem( "richness" ) === null ) {
        sessionStorage.setItem( "richness", "dark" );
    }
    if ( sessionStorage.getItem( "flavor" ) === null ) {
        sessionStorage.setItem( "flavor", "none" );
    }
}

// make the radio buttons reflect on data that can be turned into the image
var inputRadios = document.querySelectorAll( "input[type=radio]" );

// attach some event listeners
for ( var i = 0; i < inputRadios.length; i++ ) {
    inputRadios[ i ].addEventListener( "change", function( e ) {
        var name = e.target.name;
        var value = e.target.value;
        console.log( name + " " + value )
        setImageData( {
            "name": name
            , "value": value
        } );
        refreshImage();
    } );
}

// image change methods

// store the data in the session state
var setImageData = function( data ) {
    sessionStorage.setItem( data[ "name" ], data[ "value" ] );
};

// change the image. since the number of properties is small it's cheap to reset
// the whole thing entirely rather than writing something illegible.
var refreshImage = function() {
    var sommImgCoffee = document.getElementById( 'somm-img-coffee' );
    var sommImgFlavor = document.getElementById( 'somm-img-flavor' );
    var richness = sessionStorage.getItem( "richness" );
    var topping = sessionStorage.getItem( "topping" );
    var flavor = sessionStorage.getItem( "flavor" );
    sommImgCoffee.src = "img/png/coffee/" + richness + "-" + topping + ".png";
    if ( flavor != "none" ) {
        sommImgFlavor.src = "img/icons/flavors/" + flavor + ".png"
    } else {
        sommImgFlavor.src = "";
    }
}

// use these methods at startup to bootstrap the process
initSommelierImageData();
refreshImage();
