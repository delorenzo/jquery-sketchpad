var opacity = [];
var timeout;

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
	var edgeLen = 1000/numSquares;
	var count = 0;
	for (var $i = 0; $i < numSquares; $i++) {
		for (var $j = 0; $j < numSquares; $j++) {
			$(".container").append("<div class='grid' id='" + count + "'></div>");
			count++;
			opacity[count] = 0;
		}
		$(".container").append("<br/>");
	}
	$(".grid").width(edgeLen);		
	$(".grid").height(edgeLen);
}

$(document).ready(function() {
	createSquares(64);

	$("button").click(function() {
		var $numSquares = prompt("How many squares per side do you want the new grid to be?");
		clearSquares($numSquares);
		createSquares($numSquares);
	});
});

$(document).on('mouseenter', '.grid', function() {
	//opacity[this.id] += 0.10;
	$(this).css("background-color", "#a8a8a8");
});

/*$(document).on('mousedown', '.grid', function() {
	$(".grid").mouseenter(function() {
			$(this).css("background-color", "#a8a8a8");
	});
	timeout = setInterval(function() {
		$(".grid").mouseenter(function() {
			$(this).css("background-color", "#a8a8a8");
		});
	}, 500);

	return false;
});

$(document).mouseup(function() {
	clearInterval(timeout);
	return false;
});

$(document).on('mouseout', '.container', function() {
	clearInterval(timeout);
	return false;
});*/