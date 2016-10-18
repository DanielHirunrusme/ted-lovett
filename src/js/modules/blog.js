var settings = require( "modules/settings" ),
	tumblr = require('tumblr.js');
	//url = require("urljs");




module.exports = function( el ) {
		var $el = $( el );
		$window = $( window ),
		$pagination = $('#pagination'),
		total_posts = 0,
		limit_posts = 10,
		current_page = 0,
		pages = [],
		loading = false;
		
		var o = 0;
		
		
		function init(){
			
			if(url.queryString("p") != undefined) {
				current_page = Number( url.queryString("p") ) - 1
			}
			
			getPosts(current_page);
			
			$.getJSON("http://j-otest.tumblr.com/api/read/json?callback=?", function(json) { 
			    console.log( 'total posts' + json["posts-total"] );
				total_posts = json["posts-total"]; 
				
				createPagination();
				setCurrentPagination(current_page); 
			});
		}
		
		
		function getPosts(offset){
			
			o = offset != undefined ? (offset * 10) : 0;
			
			loading = true;
			
			$.ajax({ 
			    type: 'GET', 
			    url: 'http://api.tumblr.com/v2/blog/j-otest.tumblr.com/posts?api_key=JN2Gz2mekzwrovBwjSF3GHTSTRI48V4qYZjjXuROlyTQLLl8Qw&offset=' + o + '&limit=' + limit_posts, 
			    data: { get_param: 'value' }, 
			    dataType: 'jsonp',
			    success: function (data) { 
							
							setPosts( data.response.posts );
							
			                for (i = 0; i < data.response.posts.length; i++) {
								//console.log( 'photoset ' + data.response.posts[i].photoset_layout )
								//console.log( data.response.posts[i] )
		                   	 	
								
								
								//$('.posts').append('<div style="text-align: center; border-top: 1px solid #aaa; width: 300px;"><a href="' + data.response.posts[i].post_url +'"> ' + data.response.posts[i].caption + '<img align="center" src="' + data.response.posts[i].photos[0].alt_sizes[0].url + '"></a></div><br/><br/>');
							    //$('#results').append('<div style="text-align: center; border-top: 1px solid #aaa; width: 300px;"><a href="' + data.response.posts[i].post_url +'"> ' + data.response.posts[i].caption + '<img align="center" src="' + data.response.posts[i].photos[0].alt_sizes[0].url + '"></a></div><br/><br/>');
			                }
			                    var result = 0;
			                    result = data.response.total_posts / 10;
                     
			                    for (j = 1; j <= result.toFixed(0); j++) {
									//console.log(  )
			                       // $('#page').append('<a style="border: 1px solid #ccc; margin: 2px; border-radius: 5px; text-decoration: none; padding: 5px 10px; color: #000;" href="?page=' + j + '">' + j + '</a>');
			                    }
                 
			    }
			});
		}
		
		
		function setPosts(postData){
			
			console.log(postData);
			
			/*
			*
			*	If any post, fade out
			*	after fading out remove it
			*	then set loading = false so you can click pagination again
			*
			*/
			if( $('.posts').length > 0 ) {
				$('.posts').eq(0).velocity('stop').velocity({ opacity:0 }, 
					{
						duration:settings.animationSpeed,
						complete:function(){ 
							$('.posts').eq(0).remove(); 
							loading = false; 
						}
				 	});
			} else {
				loading = false; 
			}
			
			$('.post-container').append('<div class="posts scroll-container" id="post-'+ current_page +'"></div>');
			$('#post-'+current_page).velocity('stop').velocity({ opacity:1 }, {duration:settings.animationSpeed, delay:settings.animationSpeed});
			
			for (i = 0; i < postData.length; i++) {
				
				var layout = postData[i].photoset_layout != undefined ? postData[i].photoset_layout : '1';
				
				var num = Number(layout);
				var digits = num.toString().split('');
				//console.log(digits);
				
				$('#post-'+current_page).append('<div class="post post-'+current_page+'-'+i+' layout-'+ layout +' ">');
				
				//blog date
				var dateFormat = $.datepicker.formatDate('MM dd, yy', new Date( postData[i].date ) );
				$('.post-'+current_page+'-'+i).append( '<p class="post-date">' + dateFormat + '</p>' );
				
				//blog title
				$('.post-'+current_page+'-'+i).append( postData[i].caption ); 
			
				
				for(var k=0; k<digits.length; k++) {
					
					//console.log('r ' + k);
					
					$('.post-'+current_page+'-'+i).append('<div class="post-row row-'+current_page+'-'+i+'-'+k+'"></div>');
					
					for(var m=0; m < Number(digits[k]); m++) {
						
						var num = k < 2 ? m + k : m+k+1;
						var captionClass = '';
						
						if(postData[i].photos[num].caption != '' && postData[i].photos[num].caption != undefined) {
							captionClass = 'has-caption';
							$('.row-'+current_page+'-'+i+'-'+k).addClass('has-caption');
						}
						//postData[i].post_url
						$('.row-'+current_page+'-'+i+'-'+k).append('<div style="background-image:url('+ postData[i].photos[num].alt_sizes[0].url +')" class="'+ captionClass +' span-'+ digits[k] +'" > <p class="caption">' + postData[i].photos[num].caption + '</p><img align="center" src="' + postData[i].photos[num].alt_sizes[0].url + '"></div>');
						
					}
					
					
				
					
					
				}
				
				
				
				for(var j=0; j<postData[i].photos.length; j++) {
					//$('.row-'+current_page+'-'+i+'-'+k).append('<a href="' + postData[i].post_url +'"> ' + postData[i].photos[j].caption + '<img align="center" src="' + postData[i].photos[j].alt_sizes[0].url + '"></a>');
				}
				
		
			}
			

			
		}
		
		function createPagination(){
			
			console.log( 'create pagination' );
			
			if(total_posts > limit_posts) {
				
				$pagination.append( '<button class="back">Back</button>' );
				
				var page_count = 0;
				
				for( var i=0; i<total_posts; i++ ) {
					if( i % limit_posts == 0 ) {
						$pagination.append( '<button class="pagination_num" data-page-num="' + page_count + '" >' + ( page_count + 1 ) + '</button>' );
						pages.push({num:page_count});
						page_count++;
					}
					
					
				}
				
				total_pages = page_count;
				
				$pagination.append( '<button class="next">Next</button>' );
				
				$('.pagination_num').on('click', pageClicked);
				$('.back').on('click', backClicked);
				$('.next').on('click', nextClicked);
				
				
				
			}
			
		}
		
		function setCurrentPagination(num){
			$('.pagination_num').removeClass('active');
			$('.pagination_num').eq(num).addClass('active');
			
			if(num == 0) $('.back').addClass('disabled');
			else $('.back').removeClass('disabled');
			
			if(num == total_pages-1) $('.next').addClass('disabled');
			else $('.next').removeClass('disabled');
		}
		
		function pageClicked(e){
			if($(e.currentTarget).data('page-num') != current_page)
			goToPage( $(e.currentTarget).data('page-num') )
		}
		
		function backClicked(){
			if(current_page > 0) {
				current_page--;
				goToPage( current_page );
			}
		}
		
		function nextClicked(){
			if(current_page < total_pages - 1) {
				current_page++;
				
				goToPage( current_page );
			}
		}
		
		function goToPage(num) {
			
			if(loading) return true;
			
			var page = num + 1;
			
			current_page = num;
			getPosts(current_page);
			setCurrentPagination( current_page );
			url.updateSearchParam( "p", page );
			
		}
		
		
		init();

		//console.log('BLOG INITIATED'); 
};
  