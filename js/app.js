$(document).ready(function(){
	$('[data-toggle="popover"]').popover({title: "<div class = 'titleclass'>Kimi Raikkonen</div>", content: "<div>Contact: USP000045</div><div>Start Date: 14-Apr-2014</div><div class = 'redtext'>End Date: 09-Jan-2020</div><div><button class = 'btn btn-danger btnalignment'>Customer Details</button><button class = 'btn btn-danger btnalignment'>Contact Details</button></div>", html: true, placement: "top"});
	var window_height = window.innerHeight;
	var footer_height = Number($('footer').css('height').split('px')[0]); //67
	var sidebar_height = window_height - footer_height;
	$('.sidebar').css('height', sidebar_height);
});