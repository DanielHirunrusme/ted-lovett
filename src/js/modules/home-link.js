var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


 "use strict";



module.exports = function( el ) {
 	   
		//var win = window;
	   
	    console.log('about-link module')
		console.log(el);
		
		var aboutShown = false,
			aboutScreen = document.getElementById('about-screen');
		
		el.addEventListener('click', toggleAbout);
		
		function toggleAbout(){
			
			//console.log('change background color')
			bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
			console.log('bgColor ' + bgColor);
			aboutScreen.style.backgroundColor = bgColor;
			aboutScreen.classList.toggle('shown');
			/*
			if(!aboutShown) {
				
				aboutShown = true;
			} else {
				aboutScreen.classList.remove('shown');
				aboutShown = false;
			}
			*/
		}
};
  