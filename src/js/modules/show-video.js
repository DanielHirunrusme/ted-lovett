var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


 "use strict";


 var removeClass = function(e, c) {
     e.className = e.className.replace(new RegExp('(?:^|s)' + c + '(?!S)'), '');
 }
 
module.exports = function( el ) {
 	   
		var win = window,
			id = el.id;
			
		el.addEventListener('click', showVideo);
		
		var show_collection_elements = document.getElementsByClassName('show-collection');
		 
		function showVideo(){
			document.body.classList.add('show-video');
			settings.tier.current = 0;
			
			for(var i=0; i<show_collection_elements.length; i++) {
				show_collection_elements[i].classList.remove('selected');
			}
		
		}
		
};
  