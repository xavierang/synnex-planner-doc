$(document).ready(function(){
	$('#team-nav ul li').click(function(){
		var memberType = $(this).html();
		switch (memberType) {
			case ('Directors'):
				$('div.planners').addClass('hidden');
				$('div.directors').removeClass('hidden');
				break;
			case ('Product Managers'):
				break;
			case ('Planners'):
				$('div.directors').addClass('hidden');
				$('div.planners').removeClass('hidden');
				break;
			default:
		}
	});
});