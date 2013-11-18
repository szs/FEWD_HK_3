$(function() {	

  // to do - actually make a tally :)

  // to do - understand all of this :))))

	var counter = 0;
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

//show image[0] in #image-to-vote-on

//If user clicks on the Skip/Back button, use value to executive respective function, remove previous photo

	$('#buttons-wrapper').on('click','button', function(e){
    if (this.disabled){ return false };
		counter = increment($(this).val());
    checkLimits();
		shiftImage();
	})

// If user selects rating option, execute skip button, add value to tally
	$('.your-vote select').on('change', function(e) {
		// todo
    e.preventDefault();
		var $this = $(this);
		// tally = parseInt($this.val())		
	});

	function shiftImage(){
		$('#container > img').attr('src', images[counter]);
	}

	function increment(val){
		var increment = (val == 'back') ? -1 : 1;
		return (counter + increment);	
	}

  function checkLimits(){
    isBackBtnDisabled();
    isFinalImageShown();
  }

  function isFinalImageShown(){
    if (counter == counter.length) {
      // todo
    } else {
    }
  }

  function isBackBtnDisabled(){
    if (!counter){
      backBtn.disabled = true;
    } else {
      backBtn.disabled = false;
    }
  }
});

// Upon reaching the last image (7% = 0?), print "'You have reached the end. Total deliciousness score was:' + ' [averageScore]'"




