// Navbar stuff

$(document).ready(function() {
	$(".navbar-toggler").click(function(){
		$(".cross").addClass("show-cross");
		$("body").addClass("bodyfixed");
		$(".menu").addClass("active");
		$(".overlay").addClass("show-overlay");
	});
	$(".cross").click(function(){
		$(this).removeClass("show-cross");
		$(".menu").removeClass("active");
		$("body").removeClass("bodyfixed");
		$(".overlay").removeClass("show-overlay");
	});
});

$(window).resize(function(){
	if($(window).width() > 991){
		$("body").removeClass("bodyfixed");
		$(".overlay").removeClass("show-overlay");
		$(".menu").removeClass("active");
		$(".cross").removeClass("show-cross");
	}
});

// "How it works" button scroll
$("#dp-welcome-howitworks").click(function(){
	var el = $('.dp-welcome-banner img');
	$('html, body').animate({
    scrollTop: (el.offset().top + el.outerHeight(true))
},500);
	return false;
});

$("#dp-sales-welcome-learnmore").click(function(){
	var el = $('.dp-sales-welcome .recurring-section');
	$('html, body').animate({
    scrollTop: (el.offset().top - 50)
},500);
	return false;
});
