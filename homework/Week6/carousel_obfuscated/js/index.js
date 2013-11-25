$(function() {	

  // to do - actually make a tally :)


	var counter = 0;
	var total = 0;
	// var average = total / ;

	var images = [
		"images/food1.jpg",
		"http://lorempixel.com/200/200/food/6",
		"http://lorempixel.com/200/200/food/7",
		"http://lorempixel.com/200/200/food/8",
		"http://lorempixel.com/200/200/food/9",
		"http://lorempixel.com/200/200/food/10",
		"http://lorempixel.com/200/200/food/11"
	];

  	var backBtn = document.querySelector('button[value="back"]');
  	var skipBtn = document.querySelector('button[value="skip"]');


	$('#buttons-wrapper').on('click', '.button', function(e) {
		if (this.disabled){ return false };
			counter = increment($(this).val());
			checkLimits();
			shiftImage();
	});

	// $('select').change(function() {
	// 	total = total + parseInt($(this).val());
	// 	console.log = ("total");
	// });


	function shiftImage(){
		$('#container >img').attr('src', images[counter]);
	}

	function increment(val){
		var increment = (val == 'back') ? -1 : 1;
		return (counter + increment);
	}

	function checkLimits (){
		isBackBtnDisabled();
		isFinalImageShown();
	}

	function isFinalImageShown(){
		if (counter == counter.length) {
			skipBtn.disabled = true;
			$('#final-message').text('You have reached the end. Total deliciousness score was:' + '[averageScore]')
		} else {
		}
	}

	function isBackBtnDisabled(){
		if (counter == 0){
			backBtn.disabled = true;
		} else {
			backBtn.disabled = false;
		}

	}

	// function finalScore(){

	// }

});

// Upon reaching the last image, print "'You have reached the end. Total deliciousness score was:' + ' [averageScore]'"




