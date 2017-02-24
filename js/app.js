/*Added by Sairam Rugada*/
$(document).ready(function(){
	var window_height = window.innerHeight;
	var footer_height = Number($('footer').css('height').split('px')[0]); //67
	var sidebar_height = window_height - footer_height;
	$('.sidebar').css('height', sidebar_height);
});