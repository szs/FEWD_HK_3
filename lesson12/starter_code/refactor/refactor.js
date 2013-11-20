// 1
var firstName = "William",
var lastName = "Nelly",
var school = "Southwestern College"

var context = 	"<img src='Will.jpg' alt='" + firstName + "\'s picture'>" +
				"<p>The instructor for this course is" + firstName + + lastName + "." +
				" William has a degree in Physics from Southwestern College.</p>"

$("body").append(context);



// 2

// $("#container>ol").prepend("<li>Milk</li>");
// $("#container>ol").prepend("<li>Cookies</li>");
// $("#container>ol").prepend("<li>Sugar</li>");
// $("#container>ol").prepend("<li>Bananas</li>");
// $("#container>ol").prepend("<li>Gatorade</li>");


var items = ["Milk", "Cookies", "Sugar", "Bananas", "Gatorade"];

items.forEach(function(createLi);

function createLi(itemName){
	$("#container>ol").prepend('<li>' + element + "</li>");
});

// 3
// $("#container").css("width","960px");
// $("#container").css("background","red");
// $("#container").css("color","purple");
// $("#main").css("width","960px");
// $("#main").css("background","red");
// $("#main").css("color","purple");


$("#container, #main").css({
	"width": "960px";
	"background":"red",
	"color": "purple",
})


// 4
// $("input").css("width","200px")
// $("input").attr("placeholder","My placeholder");
// $("input").before("<label>My input</label>");


$("input").css("width","200px")
		.attr("placeholder","My placeholder");
		.before("<label>My input</label>");


