var settings = require( "modules/settings" ),
	throttle = require("modules/throttle");


 "use strict";


 var removeClass = function(e, c) {
     e.className = e.className.replace(new RegExp('(?:^|s)' + c + '(?!S)'), '');
 }
 
module.exports = function( el ) {
 	   
		var win = window,
			id = el.id;
			
			//console.log('el ' + el.id);
			 
			console.log('======================');
			console.log('ID ' + id); 
			console.log('======================');
			 
			var collection = document.getElementById(id);
			var items = collection.getElementsByClassName('blog-article');
			
			currentImage = 0;
			
			//var buttons = collection.getElementsByClassName('article-button');
			
			//console.log('get panel');
			
			var panel = document.getElementById('collection-panel');
			var panelImg = document.getElementById('panel-image');
			var innerImg = panelImg.getElementsByTagName('img')[0];
			
			var panelTop = panel.getElementsByClassName('item-top')[0];
			var panelBottom = panel.getElementsByClassName('item-bottom')[0];
			
			for(var i=0; i<items.length; i++) {
				items[i].addEventListener('click', itemClick);
			} 
			
			//panelImg.removeEventListener('click', panelImgClicked, false);
			
			 

			var new_element = panelImg.cloneNode(true);
			panelImg.parentNode.replaceChild(new_element, panelImg);
			
			new_element.addEventListener('click', panelImgClicked);
			innerImg = new_element.getElementsByTagName('img')[0];
			
			function panelImgClicked(e){
				e.stopPropagation();
				
				if(currentImage < items.length - 1) currentImage++;
				else currentImage = 0;
				
				switchImage(currentImage);
				
				console.log('next image');
			}
			
			function switchImage(num){
				console.log('trigger click')
				//var button = items[num].getElementsByClassName('article-button')[0];
				//button.click();
				var targ = items[num].getElementsByTagName('img')[0].src;
				var itemTop = items[num].getElementsByClassName('top')[0];
				var itemBottom = items[num].getElementsByClassName('bottom')[0];
				
				if(itemTop != undefined) panelTop.innerHTML = itemTop.textContent;
				if(itemBottom != undefined) panelBottom.innerHTML = itemBottom.textContent;
				
				for(var i=0; i<items.length; i++) {
					var button = items[i].getElementsByClassName('article-button')[0];
					button.classList.remove('selected');
				}
				
				items[num].getElementsByClassName('article-button')[0].classList.add('selected');
				
				innerImg.src = String(targ);	
				
				//button.trigger('click');	
			}
			
			function itemClick(e) {
				var targ = e.target.src;
				var itemInfo = e.target.parentElement.previousSibling.previousSibling;
				
				var itemTop = itemInfo.getElementsByClassName('top')[0];
				var itemBottom = itemInfo.getElementsByClassName('bottom')[0];

				if(itemTop != undefined) panelTop.innerHTML = itemTop.textContent;
				if(itemBottom != undefined) panelBottom.innerHTML = itemBottom.textContent;
				
				
				
				
			//	console.log('itemTop');
				//console.log(itemTop);
				
				for(var i=0; i<items.length; i++) {
					var button = items[i].getElementsByClassName('article-button')[0];
					button.classList.remove('selected');
				}
				
				var _id = e.target.parentNode.id;
				
				document.getElementById(_id).classList.add('selected');
				
				innerImg.src = String(targ);	
				
				//console.log(targ)
			}
			

			function init(){
				
				var first_article = collection.getElementsByClassName('blog-article')[0];
				var first_image = collection.getAttribute("data-firstImage");
				
				console.log('collection'); 
				console.log(collection)
				
				console.log('items[0]')
				console.log(items[0].getElementsByTagName('img'));
				
				innerImg.src = first_image;
				
				var itemInfo = collection.getElementsByClassName('article-content')[0];
				
				var itemTop = itemInfo.getElementsByClassName('top')[0];
				var itemBottom = itemInfo.getElementsByClassName('bottom')[0];

				if(itemTop != undefined) panelTop.innerHTML = itemTop.textContent;
				if(itemBottom != undefined) panelBottom.innerHTML = itemBottom.textContent;
			}
			
			init();
		
};
  