var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


 "use strict";



module.exports = function( el ) {
 	   
		var win = window;
			
		var id = el.id;
			
		var panel = document.getElementById(id);
		var itemInfo = panel.getElementsByClassName('item-info')[0];
		//var panelImage = panel.getElementsByClassName('panel-image')[0];
		
		panel.addEventListener('click', panelClick);
		
		//document.onmousemove = mouseMove;
		window.addEventListener('mousemove', mouseMove);
		
		var locked = false;
		var IE = document.all?true:false
		
		var tempX = 0;

		// If NS -- that is, !IE -- then set up for mouse capture
		if (!IE) document.captureEvents(Event.MOUSEMOVE)
		
		function mouseMove(e) {
  		  if (IE) { // grab the x-y pos.s if browser is IE
  		    tempX = e.clientX + document.body.scrollLeft
  		    tempY = e.clientY + document.body.scrollTop
  		  } else {  // grab the x-y pos.s if browser is NS
  		    tempX = e.clientX
  		    tempY = e.clientY
  		  }  
  		  // catch possible negative values in NS4
  		  if (tempX < 0){tempX = 0}
  		  if (tempY < 0){tempY = 0}  
  		  // show the position values in the form named Show
  		  // in the text fields named MouseX and MouseY
  		  //document.Show.MouseX.value = tempX
  		  //document.Show.MouseY.value = tempY	
		  
		  //console.log(el)
		  
		  if(tempX < 10) {
			  locked = true;
			  panel.classList.add('locked');
		  }
		  
		  if(!locked){
			  panel.style.width = (win.innerWidth - tempX - 1) + 'px';
			  itemInfo.style.left = (-tempX) + 'px';
		  }
		  
		  //panelImage.style.left = 
		  
		 // el.style.width = tempX + 'px';
  		  return true;
		  
			//console.log(e.clientX)
			
		}
		
		
		function panelClick(e){
			locked = false;
			panel.classList.remove('locked');
			panel.style.width = (win.innerWidth - e.clientX - 1) + 'px';
			itemInfo.style.left = (-e.clientX) + 'px';
		}
};
  