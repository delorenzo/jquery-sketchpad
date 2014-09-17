$(document).ready(function() {
	for (var $i = 1; $i <= 4; $i++) {
		for (var $j = 1; $j <= 4; $j++) {
			$(".container").append("<div class='grid' id='" + $i*$j + "'></div>");
		}
		$(".container").append("<br/>");
	}

	$(".grid").mouseenter(function() {
		$(this).css("background-color", "purple");
	});

	$(".grid").mouseleave(function() {
		$(this).css("background-color", "white");
	});
});