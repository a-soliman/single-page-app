$(document).ready(function(){

	$('.home').addClass('active')
	
	$('.home').click(function() {
		$(this).addClass('active')
		$('.about').removeClass('active')
		$('.works').removeClass('active')
	})
	$('.about').click(function() {
		$(this).addClass('active')
		$('.home').removeClass('active')
		$('.works').removeClass('active')
	})
	$('.works').click(function() {
		$(this).addClass('active')
		$('.about').removeClass('active')
		$('.home').removeClass('active')
	})
})
