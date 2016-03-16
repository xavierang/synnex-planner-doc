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

	$('.hamburger').click(function(){
		$('#dropdown-nav').toggleClass("hidden");
	});

	$('.read-btn').click(function(){
		$('.read-more-text').css('display','inline');
		$('.read-btn').addClass("hidden");
	});

	$('.members').click(function(){
		$(this).next().toggleClass('hidden');
	});
	
	$('#brands img').click(function(){
		$(this).next().toggleClass('hidden');	
	});

	$('#brands h3').click(function(){
		$(this).next().toggleClass('hidden');
	});
});