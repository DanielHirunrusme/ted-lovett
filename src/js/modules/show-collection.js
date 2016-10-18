var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


 "use strict";


 var removeClass = function(e, c) {
     e.className = e.className.replace(new RegExp('(?:^|s)' + c + '(?!S)'), '');
 }
 
module.exports = function( el ) {
 	   
		var win = window,
			id = el.id;
		
		var show_video_elements = document.getElementsByClassName('show-video');
			
		el.addEventListener('click', showCollection);
		
		if(settings.isMobile) {
			var collection_links = document.getElementsByClassName('collections-link');
			
			for(var i=0; i<collection_links.length; i++) {
				collection_links[i].addEventListener('click', showCollection);
			}
		}
		
		function showCollection(){
			document.body.classList.remove('show-video');
			settings.tier.current = 1;
			
			for(var i=0; i<show_video_elements; i++) {
				show_video_elements[i].classList.remove('selected');
			}
			
			el.classList.add('selected');
		}
		
};
  