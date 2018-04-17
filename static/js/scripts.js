$('.carousel-indicators li').hover(function() {
		var slideNumber = $(this).data('slide-to');
		$('#myCarousel').carousel(slideNumber);
});


$(window).on('wheel', function(event){
  if(event.originalEvent.deltaY < 0){
    $('.carousel').carousel('prev');
  }
  else {
    $('.carousel').carousel('next');
  }
});
