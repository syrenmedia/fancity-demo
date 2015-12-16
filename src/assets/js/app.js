$(document).foundation();

$(".facebook, .twitter").on("click", function(){
	$(".step1").addClass("hide");
	$(".step2").removeClass("hide");
});

$("#form-submit").on("click", function(e){
	e.preventDefault();
	$(".step2").addClass("hide");
	$(".step3").removeClass("hide");
});

$(".sports .button").on("click", function(e){
	e.preventDefault();
	$(this).toggleClass("is-selected");
});

$(".title-bar-title").on("click", function(){
	$("#team-dropdown").toggleClass("is-open");
});

$(".top-slider").slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
});