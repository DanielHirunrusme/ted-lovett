var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");

	



module.exports = function( el ) {
	
		var barbContainer = document.getElementById('barba-wrapper');
		
		
		
		Barba.Pjax.start();  
		
		Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
			console.log('barba new page ready')
			initModules();
		});
		
		function initModules(){
			
			console.log('barb elem len '+ document.getElementsByClassName('barba-container').length );
			
			var barbElements  = document.getElementsByClassName('barba-container')[1];
		    var modules = barbElements.querySelectorAll( "[data-module-init]" );
			
		    for ( var i = 0; i < modules.length; i++ ) {
		      var el = modules[ i ];
		      var names = el.getAttribute( "data-module-init" ).split( " " );
		      var Module;

		      for ( var j = 0; j < names.length; j++ ) {
		
		  	      try {
		  	        Module = require( "modules/" + names[ j ] );
		  	      } catch ( e ) {
		  	        Module = false;
		  	        console.log( names[ j ] + " module does not exist." );
		  	      }
		  	 

		        // Initialize the module with the calling element
		        if ( Module ) {
		          new Module( el );
		        }
		      }
		    }
			
		}
		
}; 
  