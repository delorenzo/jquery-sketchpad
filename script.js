var opacity = [];
var timeout;
var mouseDown = false;
var currentColor;

function clearSquares() {
	//clear grid
	$(".grid").remove();
	$("br").remove();

	//clear opacity array
	/*
	while (opacity.length > 0) {
		opacity.pop();
	}*/
}

function createSquares(numSquares) {
	var edgeLen = Math.floor(1000/numSquares);
	var count = 0;
	for (var $i = 0; $i < numSquares; $i++) {
		for (var $j = 0; $j < numSquares; $j++) {
			$(".sketchpad-container").append("<div class='grid' id='" + count + "'></div>");
			count++;
			opacity[count] = 0;
		}
		$(".sketchpad-container").append("<br/>");
	}
	$(".grid").width(edgeLen);		
	$(".grid").height(edgeLen);
}

$(document).ready(function() {
	currentColor = "#a8a8a8";
	createSquares(64);

	$("button#new").click(function() {
		var $numSquares = prompt("How many squares per side do you want the new grid to be?");
		clearSquares($numSquares);
		createSquares($numSquares);
	});

	$(document).mousedown(function() {
		mouseDown = true;
	})
	.mouseup(function() {
		mouseDown = false;
	});

	$(".color").click(function() {
		currentColor = this.id;
	});
});

$(document).on('mouseover', '.grid', function() {
	//opacity[this.id] += 0.10;
	if (mouseDown) {
		$(this).css("background-color", currentColor);
	}
});
