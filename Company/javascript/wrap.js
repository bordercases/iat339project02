"use strict";
// switch the sommelier form blocks to the sidebar
var emToPix = function( ems ) {
    var pixels = ems * 16;
    return pixels;
};
// when we switch behavior
var emBarrier = 50;
var defaultSommControl = 0;
window.addEventListener( "resize", function( e ) {
    var width = window.innerWidth;
    if ( width <= emToPix( emBarrier ) ) {
        // hide sommelier controls
        var sommControls = document.querySelectorAll( ".somm-control" );
        var switchOptions = document.querySelector( "#switchOptions" );
        for ( var i = 0; i < sommControls.length; i++ ) {
            sommControls[ i ].style.display = "none";
        }
        // unhide active one
        sommControls[ defaultSommControl ].style.display = "block";
        switchOptions.style.display = "block";
    }
    if ( width > emToPix( emBarrier ) ) {
        // unhide sommelier controls
        var sommControls = document.querySelectorAll( ".somm-control" );
        var switchOptions = document.querySelector( "#switchOptions" );
        for ( var i = 0; i < sommControls.length; i++ ) {
            sommControls[ i ].style.display = "block";
        }
        switchOptions.style.display = "none";
    }
} );
document.querySelector( "#switchOptions" )
    .addEventListener( "click", function( e ) {
        var sommControls = document.querySelectorAll( ".somm-control" );
        sommControls[ defaultSommControl ].style.display = "none";
        defaultSommControl = ( defaultSommControl + 1 ) % 3;
        sommControls[ defaultSommControl ].style.display = "block";
    } );
