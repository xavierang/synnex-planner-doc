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

	$('#dropdown-nav a').click(function(){
		$('#dropdown-nav').addClass("hidden");
	});

	$('.read-btn').click(function(){
		$('.read-more-text').css('display','inline');
		$('.read-btn').addClass("hidden");
	});

	$('#team-nav li').click(function(){
		$('#team-nav li').removeClass('content-active');
		$(this).addClass('content-active');
	});

	$('.members').click(function(){
		if($(this).hasClass('members-active')){
			$(this).removeClass('members-active');
			$(this).next().addClass('hidden');
		}else{
			//clear others
			$('.members-detail').addClass('hidden');
			$('.members').removeClass('members-active');

			$(this).next().toggleClass('hidden');
			$(this).toggleClass('members-active');
		}
	});

	$('#brands img').click(function(){
		var brand = $(this).attr('alt');
		if($(this).hasClass('brands-active')){
			$(this).removeClass('brands-active');
			$(this).attr('src','img/brands/'+brand+'-grayscale.jpg');
			
			//clear all opened accordion			
			$(this).next().children('div').addClass('hidden');
			$(this).next().children('h3').removeClass('accordion-active');
		}else{
			$(this).addClass('brands-active');
			$(this).attr('src','img/brands/'+brand+'.jpg');
		}
		$(this).next().toggleClass('hidden');	
	});

	$('#brands h3').click(function(){
		$(this).next().toggleClass('hidden');
		$(this).toggleClass('accordion-active');
	});

	$('#contact-nav li').click(function(){
		$('#contact-nav li').removeClass('content-active');
		$(this).addClass('content-active');

		var temp = $(this).html();
		if(temp=="Contact List"){
			$('#contact-list-content').attr('class','contact-onscreen');
			$('#contact-us-content').attr('class','contact-offscreen');
		}else if(temp=="Contact Us"){
			$('#contact-list-content').attr('class','contact-offscreen');
			$('#contact-us-content').attr('class','contact-onscreen');
		}
	});

	$('input[type="submit"]').click(function(event){
		event.preventDefault();
		
	});
});