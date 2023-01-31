jQuery(document).ready(function() {

	//if submit button is clicked
	jQuery('.contact-form #scrn_send').click(function () {		
		
		//Get the data from all the fields
		var name = jQuery('input[name=name]');
		var email = jQuery('input[name=email]');
		var comment = jQuery('textarea[name=message]');
		var error = 0;

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('hightlight');
			error = 1
		} else name.removeClass('hightlight');
		
		if (email.val()=='') {
			email.addClass('hightlight');
			error = 1;
		} else email.removeClass('hightlight');
		
		if (comment.val()=='') {
			comment.addClass('hightlight');
			error = 1;
		} else comment.removeClass('hightlight');
		
		if(error === 1) {
			return false;
		}
		//disabled all the text fields
		jQuery('.text').attr('disabled','true');
		
		//show the loading sign
		jQuery('.loading').show();

		jQuery.post(MyAjax.ajaxurl, {
            	action 	: 'teo-contact-form',
            	name	: name.val(),
            	email	: email.val(),
            	comment	: comment.val()
            }, function() {			
				jQuery('.done').fadeIn('slow');
				jQuery('.contact-form form').fadeOut('slow');
		});
					
		return false;
						
		//cancel the submit button default behaviours
	});	

	// Animsition
	jQuery(".animsition").animsition({
	
	inClass               :   'fade-in',
	outClass              :   'fade-out',
	inDuration            :    1500,
	outDuration           :    800,
	linkElement           :   '.animsition-link',
	// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	loading               :    true,
	loadingParentElement  :   'body', //animsition wrapper element
	loadingClass          :   'animsition-loading',
	unSupportCss          : [ 'animation-duration',
	                          '-webkit-animation-duration',
	                          '-o-animation-duration'
	                        ],
	//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	overlay               :   false,
	overlayClass          :   'animsition-overlay-slide',
	overlayParentElement  :   'body'
	});
	
	
	
	// Smooth scroll
	smoothScroll.init({
    	speed: 650, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		offset: 0
	});
	

	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	jQuery('#intro').parallax("50%", 0.2);
	jQuery('#project-intro').parallax("50%", 0.2);
	
});



//Fade out on scroll

jQuery(window).scroll(function() {
	var scroll = jQuery(window).scrollTop();
	jQuery('#intro, #project-intro').css({'opacity':(( 1000-scroll )/1000)});
});
