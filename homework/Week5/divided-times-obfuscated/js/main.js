$(function() {
	// User clicks on a button
	$('nav').on('click', 'li', function(e) {

		var $this = $(this);
		// slide down the img thumbnail
		slideThumbs($this);
		// highlight the active section
		activateBtn($this);

		return false;
	});	         	

	function slideThumbs (li) {
		
		var $slider = $('#slide-down'),
			topic = li.find('span').text().toLowerCase();

		if (li.hasClass('active')){
		
			$slider.slideUp();
		
		} else {

			$slider.slideDown('fast', function() {	

				$('#slide-down > section').hide();
				$('section.' + topic).show();

			});
		}
	}

	function activateBtn (li) {
		// deselect all the other topics
		li.siblings('li').removeClass('active');
		// highlight the selected topic tab
		li.toggleClass('active');

	}

});

