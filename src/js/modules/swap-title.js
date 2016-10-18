var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");

	



module.exports = function( el ) {
		
		var nav = document.getElementById(el.id);
		var navItems = document.getElementsByClassName('collections-link');
		
		nav.addEventListener('click', navClick);
		nav.addEventListener('mouseover', navOver);
		nav.addEventListener('mouseout', navOut);
		
		function navClick(){
			
			for(var i=0; i<navItems.length; i++) {
				navItems[i].classList.remove('selected');
			}
			
			nav.classList.add('selected');
		}
		
		function navOver(e) {
			
			var titleElemAll = document.getElementsByClassName('link-home');
			var title = 'title-' + e.target.getAttribute('data-blog-handle')
			var titleElem = document.getElementById(title);
			
			var gcLogo = document.getElementById('gc-logo');
			
			for(var i=0; i<titleElemAll.length; i++) {
				titleElemAll[i].classList.remove('shown');
			}
			
			gcLogo.classList.add('hidden');
			titleElem.classList.add('shown');
			
			console.log(e.target.getAttribute('data-blog-handle'))
		}
		
		function navOut(e) {
			var titleElemAll = document.getElementsByClassName('link-home');
			var title = 'title-' + e.target.getAttribute('data-blog-handle')
			var titleElem = document.getElementById(title);
			
			var gcLogo = document.getElementById('gc-logo');
			
			for(var i=0; i<titleElemAll.length; i++) {
				titleElemAll[i].classList.remove('shown');
			}
			
			gcLogo.classList.remove('hidden');
			//titleElem.classList.add('shown');
		}
		
		/*
		var tag = document.createElement('script');
		 
	    tag.src = "//www.youtube.com/iframe_api";
	    var firstScriptTag = document.getElementsByTagName('script')[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	    var player1;
	    var player2;

	    function onYouTubeIframeAPIReady() {
	        player1 = new YT.Player('player1', {
	            height: '350',
	            width: '425',
	            videoId: 'OdT9z-JjtJk',
	            events: {
	                'onReady': onPlayerReady,
	                    'onStateChange': onPlayerStateChange
	            }
	        });
	        player2 = new YT.Player('player2', {
	            height: '350',
	            width: '425',
	            videoId: 'NlXTv5Ondgs'
	        });
	    }

	    function onPlayerReady(event) {
	        event.target.playVideo();
	    }

	    function onPlayerStateChange(event) {
	        if (event.data == YT.PlayerState.ENDED) {
	            player2.playVideo();
	        }
	    }
		*/
		
};
  