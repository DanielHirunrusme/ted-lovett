var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


 "use strict";



module.exports = function( el ) {
 	   
		//var win = window;
	   
	    console.log('shop-link module')
		console.log(el);
		
		el.addEventListener('mouseover', shopOver);
		el.addEventListener('mouseout', shopOut)
		el.addEventListener('click', shopClick);
		
		function shopOver(e){
			
			var shopScreen = document.getElementById('shop-screen');
			shopScreen.classList.add('shown');
			
		}
		 
		function shopOut(e){
		
			var shopScreen = document.getElementById('shop-screen');
			shopScreen.classList.remove('shown');
			
		}
		
		function shopClick(e) {
			
			e.preventDefault();
			
		}
};
  