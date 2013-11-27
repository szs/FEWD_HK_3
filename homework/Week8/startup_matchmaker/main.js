$(function(){

	$('.wrapper').on('click','#navbutton', function(e){
		e.preventDefault();
		$('nav ul').slideToggle();
	})
})
