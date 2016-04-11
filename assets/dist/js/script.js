// Navbar indicator slider
$(function() {
	// Set offsets of slides
	var navHeight=$("nav.navbar").height();
	var slideOne=$(".slide#slide1").offset().top - navHeight,
		slideTwo=$(".slide#slide2").offset().top - navHeight,
		slideThree=$(".slide#slide3").offset().top - navHeight,
		slideFour=$(".slide#slide4").offset().top - navHeight,
		slideFive=$(".slide#slide5").offset().top - navHeight,
		totalHeight=$("#body").innerHeight();
	var indicatorOne={
			leftOffset: $("#nav1").offset().left,
			width: $("#nav1").width(),
			color: "#FFF"
		},
		indicatorTwo={
			leftOffset: $("#nav2").offset().left,
			width: $("#nav2").width(),
			color: "#112A60"
		},
		indicatorThree={
			leftOffset: $("#nav3").offset().left,
			width: $("#nav3").width(),
			color: "#7EC5AA"
		},
		indicatorFour={
			leftOffset: $("#nav4").offset().left,
			width: $("#nav4").width(),
			color: "#FFC0A3"
		},
		indicatorFive={
			leftOffset: $("#nav5").offset().left,
			width: $("#nav5").width,
			color: "#112A60"
		};

	// Set the css of #indicator here, so it shows up correct on load
	$("#indicator").css("left",indicatorOne.leftOffset).css("width",indicatorOne.width);

	var mobileIndicator=$("#mobile-indicator");

	var progressBars=false;

	$(window).scroll(function(){
		// Distance meseaured from top
		var scrollPosition = window.scrollY;
		// Distance measured from bottom
		var fullScrollPosition = $(window).scrollTop() + $(window).height();

		var percentScroll = (fullScrollPosition/totalHeight*100);
		// mobileIndicator.css("width",(percentScroll.toString() + '%'));
		// This just kinda seems weird on mobile
		// since the load progress bar is in same spot
		console.log(fullScrollPosition);
		if (percentScroll <= 96) {
			if (scrollPosition < slideTwo && scrollPosition > slideOne){
				$("#indicator").css("left",indicatorOne.leftOffset)
					.css("width",indicatorOne.width)
					.css("background-color",indicatorOne.color);
			}
			else if (scrollPosition < slideThree && scrollPosition > slideTwo){
				$("#indicator").css("left",indicatorTwo.leftOffset)
					.css("width",indicatorTwo.width)
					.css("background-color",indicatorTwo.color);
			}
			else if (scrollPosition < slideFour && scrollPosition > slideThree){
				$("#indicator").css("left",indicatorThree.leftOffset)
					.css("width",indicatorThree.width)
					.css("background-color",indicatorThree.color);
				if (scrollPosition > (slideThree * 1.4)){
					$("#html-sk").css("width", "100%");
			    	$("#css-sk").css("width", "100%");
			    	$("#js-sk").css("width", "90%");
			    	$("#twig-sk").css("width","80%");
			    	$("#grail-sk").css("width","50%");
			    	$("#groov-sk").css("width","80%");
			    	$("#c-sk").css("width","70%");
					$("#pyth-sk").css("width","50%");
					progressBars=true;
				}
			}
			else if (scrollPosition < slideFive && scrollPosition > slideFour){
				$("#indicator").css("left",indicatorFour.leftOffset)
					.css("width",indicatorFour.width)
					.css("background-color",indicatorFour.color);
			}
		}
		else {
			$("#indicator").css("left",indicatorFive.leftOffset)
				.css("width",indicatorFive.width)
				.css("background-color",indicatorFive.color);
			if (!progressBars){
				$("#html-sk").css("width", "100%");
		    	$("#css-sk").css("width", "100%");
		    	$("#js-sk").css("width", "90%");
		    	$("#twig-sk").css("width","80%");
		    	$("#grail-sk").css("width","50%");
		    	$("#groov-sk").css("width","80%");
		    	$("#c-sk").css("width","70%");
				$("#pyth-sk").css("width","50%");
			}
		}
	})
});
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});