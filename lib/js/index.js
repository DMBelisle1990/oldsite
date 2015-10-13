var caption = '';
var counter = 0;
var captionLength = 0;

var blah = true;


function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
 

function type(output, console) {
    console.html(output.substr(0, captionLength++));
    if(captionLength < output.length+1) {
        setTimeout(function() {
    		type(output, console);
		}, 50)
    } else {
    	counter++;
        captionLength = 0;
        output = '';
        if(counter < 3) addLineBreak(console);        	
    }
}


function addLineBreak(element) {
	var html = $(element).html();
	html += "<br>"
	$(element).html(html);
}


$(function() {
	
	var $window = $(window);
	var $document = $(document);
	var $myname = $('#myname');
	var $about_me = $(".about-me");
	var $subheading = $('#caption1, #caption2, #caption3, #cursor');
	var $icon = $('#scroll-down');

	/*
	 *This function hides the loading screen as the div passes over it
	 */
	$window.on("scroll", function() {

		if($about_me.offset().top - $myname.offset().top < 0) {
			$myname.css('visibility','hidden');
		} else {
			$myname.css('visibility','visible');
		}

		if($about_me.offset().top - $subheading.offset().top < 0) {
			$subheading.css('visibility','hidden');
		} else {
			$subheading.css('visibility','visible');
		}

		if($about_me.offset().top - $icon.offset().top < 0) {
			$icon.css('visibility','hidden');
		} else {
			$icon.css('visibility','visible');
		}
	});

	//Ensures the background image is showing wherever screen is refreshed
	var $loadscreen = $(".load-screen");
	var limit = 1100;
	if($document.scrollTop() > limit) {
		$loadscreen.css({ 'opacity' : 0 });	
	}

	//Fades in the background image over 1100px
	$window.on("scroll", function() {
		var st = $(this).scrollTop();
		if (st <= limit) {
      		$loadscreen.css({ 'opacity' : (1 - st/limit) });
   		}
	});

	
	$window.on("scroll", function () {

    /* Check the location of each desired element */
	    $('.img-wrapper').each(function () {

	        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        var bottom_of_window = $window.scrollTop() + $window.height();

	        /* If the object is completely visible in the window, fade it it */
	        if (bottom_of_window + 400 > bottom_of_object) {
	            $(this).animate({
	                'opacity': '1'
	            }, 700);
	         }
	     });
	});



  	$("#scroll-down").on("click", function() {
        $('html,body').animate({scrollTop: $(".about-me").offset().top},'slow');
  	});


  	$projectview = $("#project-view");
  	$divclose = $(".div-close");
  	$project = $(".project");
  	$calculatorProject = $("#calculator-project");
  	$calculator = $("#calculator");

  	$divclose.on("click", function() {
  		$projectview.css('display', 'none');
  		$project.css('visibility', 'visible');
  	})

  	$calculatorProject.on("click", function() {
  		$project.css('visibility', 'hidden');
  		$projectview.css('display', 'block');
  	});


  	/**
	 *  Calls the type function which types out the subheading on the portfolio
	 *  landing page
  	 */
  	setInterval('cursorAnimation()', 800);
    setTimeout(function() {
    	type("placeholder", $('#caption1'));
    	setTimeout(function() {
    		type("placeholder", $('#caption2'));
    		setTimeout(function() {
    			type("placeholder", $('#caption3'));
    		}, 1300);
    	}, 1700);
	}, 1000)



});