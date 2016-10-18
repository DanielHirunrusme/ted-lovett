var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


 "use strict";



module.exports = function( el ) {
 	   
		var win = window;
	   
		console.log('ismobile ' + settings.isMobile); 
		
		var id = el.id;
		var video_container = document.getElementById(id);
		
		var collections_menu = document.getElementById('collections-menu');
		var collections_links = collections_menu.getElementsByTagName('a');
		
		
		
		for(var i=0; i<collections_links.length; i++) {
			collections_links[i].addEventListener('click', collectionsLinkClicked);
		}
		 
		function collectionsLinkClicked(e) {
			console.log('target collection link clicked ' + e);
			//console.log(e.parent.index);
			if(settings.isMobile) e.preventDefault();
			
			var background_elements = document.getElementsByClassName('background-change');
			
				for(var i=0; i<background_elements.length; i++) {
					background_elements[i].style.backgroundColor = e.target.getAttribute('data-bgcolor');
				}
			
				//console.log('swap left video ' + link_left);
				//console.log('swap right video ' + link_right)
			if(!settings.isMobile) {
				var link_left = e.target.getAttribute('data-left-video');
				var link_right = e.target.getAttribute('data-right-video');
				
				player.loadVideoById(link_left, 0, "default");
				right_player.loadVideoById(link_right, 0, "default");
			
			}
		}
		
		console.log('video_container ' + video_container)
		
		/*
		3ZtrS_D3HLY
		*/
		
  // 2. This code loads the IFrame Player API code asynchronously.
		
        var tag = document.createElement('script');
		
		var left_video;
		var right_video;
		var right_video_holder;
		
		var left_video_url = video_container.getAttribute('data-left-video');
		var right_video_url = video_container.getAttribute('data-right-video');
		var blog_handle = video_container.getAttribute('data-blog-handle');
		
		console.log('left_video_url ' + left_video_url);	
		
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player, playerReady, right_player;
		
        function onYouTubeIframeAPIReady() {
			console.log('youtub api ready')
			/*
          player = new YT.Player('left-player', {
            height: '390',
            width: '640',
            videoId: '3ZtrS_D3HLY',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
			*/
        }
		
		
		var ratio = 16/9;
		
		
		window.onYouTubeIframeAPIReady = function() { //simple implementation
		    console.log('youtube api ready')
			
			if(!settings.isMobile) {
				var iframeH = win.innerWidth/ratio;
				var iframeW = win.innerWidth; 
			
				if(iframeH < win.innerHeight) {
					iframeH = win.innerHeight;
					iframeW = win.innerHeight * ratio;
				}
			
	            player = new YT.Player('left-player-'+blog_handle, {
	              height: iframeH,
	              width: iframeW,
				  controls: 0,
				  autohide: 1, 
				  loop: 1,
				  modestbranding: 1,
				  volume:0,
				  playerVars: {
	                autoplay: 1,
	                loop: 1,
	                controls: 0,
	                showinfo: 0,
	                autohide: 1,
	                modestbranding: 1,
	                vq: 'hd1080'},
				  modestbranding: 1,
				  autoplay: 'true',
	              videoId: left_video_url,
	              events: {
	                'onReady': onPlayerReady,
	                'onStateChange': onPlayerStateChange
	              }
	            });
			
	            right_player = new YT.Player('right-player-'+blog_handle, {
	              height: iframeH,
	              width: iframeW,
				  controls: 0,
				  autohide: 1, 
				  loop: 1,
				  modestbranding: 1,
				  volume:0,
				  playerVars: {
	                autoplay: 1,
	                loop: 1,
	                controls: 0,
	                showinfo: 0,
	                autohide: 1,
	                modestbranding: 1,
	                vq: 'hd1080'},
				  modestbranding: 1,
				  autoplay: 'true',
	              videoId: right_video_url,
	              events: {
	                'onReady': onPlayerReady,
	                'onStateChange': onPlayerStateChange
	              } 
	            });
			
				left_video = document.getElementById('left-player-'+blog_handle)
				right_video = document.getElementById('right-player-'+blog_handle)
				right_video_holder = document.getElementById('right-player-holder-'+blog_handle);
			
				//document.onmousemove = mouseMove;
				//
				window.addEventListener('mousemove', mouseMove);
			}
			
			
			
			//player.mute();
			//player.setVolume(0);
		}
		
		
		//if(playerReady) { onYouTubeIframeAPIReady(); console.log("force to call again") }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
		  console.log('player ready')
			event.target.setVolume(0);
			event.target.mute();
			event.target.setLoop(true);
          	event.target.playVideo();
        }


        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING) {
			  //console.log(event.target.a.id);
			 document.getElementById(event.target.a.id).classList.add("fade-in");
            //setTimeout(stopVideo, 6000);
            //done = true;
          }
		  
		  if(event.data == YT.PlayerState.ENDED) {
			  event.target.seekTo(0);
		  }
        }
        function stopVideo() {
         // player.stopVideo();
        }
		
		window.addEventListener("resize", winResize);
		
		
		function winResize(){
			//var player = document.getElementById('left-player');
			//var right_player = document.getElementById('right-player');
			
			var iframeH = win.innerWidth/ratio;
			var iframeW = win.innerWidth; 
			
			if(iframeH < win.innerHeight) {
				iframeH = win.innerHeight;
				iframeW = win.innerHeight * ratio;
			}
			
			left_video.width  = right_video.width = iframeW;
			left_video.height = right_video.height = iframeH;
			
			
			
		}
		


		// Detect if the browser is IE or not.
		// If it is not IE, we assume that the browser is NS.
		var IE = document.all?true:false

		// If NS -- that is, !IE -- then set up for mouse capture
		if (!IE) document.captureEvents(Event.MOUSEMOVE)

		// Set-up to use getMouseXY function onMouseMove

		// Temporary variables to hold mouse x-y pos.s
		var tempX = 0
		var tempY = 0


		
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
		  right_video_holder.style.width = (win.innerWidth - tempX) + 'px';
		  right_video.style.left = (-tempX) + 'px';
  		  return true;
		  
			//console.log(e.clientX)
			
		}
		
};
  