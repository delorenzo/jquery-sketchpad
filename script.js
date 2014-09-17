function clearSquares() {
	$(".grid").remove();
	$("br").remove();
}

function createSquares(numSquares) {
	var edgeLen = 1000/numSquares;
	for (var $i = 0; $i < numSquares; $i++) {
		for (var $j = 0; $j < numSquares; $j++) {
			$(".container").append("<div class='grid'></div>");
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

	$(".grid").mouseenter(function() {
		$(this).css("background-color", "#a8a8a8");
	});
});