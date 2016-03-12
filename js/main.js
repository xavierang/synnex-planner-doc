$(document).ready(function(){
	$('#team-nav ul li').click(function(){
		var memberType = $(this).html();
		switch (memberType) {
			case ('All'):
				$('div.planners').removeClass('hidden');
				$('div.managers').removeClass('hidden');
				$('div.directors').removeClass('hidden');
				break;
			case ('Directors'):
				$('div.planners').addClass('hidden');
				$('div.managers').addClass('hidden');
				$('div.directors').removeClass('hidden');
				break;
			case ('Product Managers'):
				$('div.planners').addClass('hidden');
				$('div.managers').removeClass('hidden');
				$('div.directors').addClass('hidden');
				break;
			case ('Planners'):
				$('div.planners').removeClass('hidden');
				$('div.managers').addClass('hidden');
				$('div.directors').addClass('hidden');
				break;
			default:
		}
	});

	$('#brands img').click(function(){
		$(this).next().toggleClass('hidden');	
	});

	$('#brands h3').click(function(){
		$(this).next().toggleClass('hidden');
	});
});