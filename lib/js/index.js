var caption = '';
var counter = 0;
var captionLength = 0;

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function type(output) {
    captionEl.html(output.substr(0, captionLength++));
    if(captionLength < output.length+1) {
        setTimeout(function() {
    		type(output);
		}, 50)
    } else {
        captionLength = 0;
        output = '';
        if(counter < 1) {
        	counter++;
        	addLineBreak("#caption1");
        	captionEl = $('#caption2');
        	setTimeout(function() {
    			type("And your eyebrows");
			}, 1000)
    	}
    }
}

function addLineBreak(element) {
	var html = $(element).html();
	html += "<br>"
	$(element).html(html);
}


$(function() {

	$('#portfolio-btn').hover(function() {
  		$("body").css("background-image", "url(../images/desktop.jpeg)");
	},
	function() {
		$("body").css("background-image", "url(../images/street.jpg)");
	});


	$('#life-btn').hover(function() {
  		$("body").css("background-image", "url(../images/glasses.jpg)");
	},
	function() {
		$("body").css("background-image", "url(../images/street.jpg)");
	});


	var hidden = '-400px';
	var showing = '-50px';
	$("#about-btn").click(function() {
        if($("#about-me").css('bottom') == hidden) {
        	$("#about-me").animate({bottom: showing}, 600);
      	} else {
        	$("#about-me").animate({bottom: hidden}, 600);
      	}
  	});


  	$("#scroll-down").click(function() {
        $('html,body').animate({scrollTop: $(".about-me").offset().top},'slow');
  	});

  	/*
	*  Calls the type function which types out the subheading on the portfolio
	*  landing page
  	*/
  	setInterval('cursorAnimation()', 800);
    captionEl = $('#caption1');
    setTimeout(function() {
    	type("Fuck you Gus");
	}, 1000)



});