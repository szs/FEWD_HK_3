$('#switcher').on('click','li', function(e){
	var color = $(this).attr('id');
	$('body').attr('class', color);
})


$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}