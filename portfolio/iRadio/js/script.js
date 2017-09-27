$('html').hide();
$(document).ready(function($){
$('html').fadeIn(800);     
$('.logo').click(function(){
$('.logo').removeClass("infinite shake").addClass('hinge').fadeOut(1800);
});
     
$('.burger').click(function(){
        $('.top-menu ul').fadeToggle(500);
                       });
     
$('.radio-block p').click(function(){
     $(this).animate(500,function(){
               $('.radio-block p').addClass('opacity0').text('Just Click The Button');});
});
     
$('.play').click(function(){
     document.getElementById('song').play();
     $('.radio-block p').css('opacity','0');
     $('.radio-block button i').removeClass('fa-play-circle-o').addClass('fa-pause-circle-o');
     $('.play').css('display','none');
     $('.pause').css('display','block');
});
$('.pause').click(function(){
     document.getElementById('song').pause();
     $('.radio-block button i').removeClass('fa-pause-circle-o').addClass('fa-play-circle-o');
     $('.pause').css('display','none'); 
     $('.play').css('display','block');
});

$('.news-container').addClass('hidden');
$('.news-container:first').removeClass('hidden');
	
$('.top-page-news').click(function(){
	$('.page-news').removeClass('active-page');
	$(this).addClass('active-page');
	var pageIndex = $(this).index();
	$('.bottom-page-news-container li').eq(pageIndex).addClass('active-page');
    var newsContainerId = '#news-container' + pageIndex;
	$('.news-container').addClass('hidden').removeClass('animated bounceInDown bounceInUp');
	$(newsContainerId).removeClass('hidden').addClass('animated bounceInUp');
	
	
});
$('.bottom-page-news').click(function(){
	$('.page-news').removeClass('active-page');
	$(this).addClass('active-page');
	var pageIndex = $(this).index();
	$('.top-page-news-container li').eq(pageIndex).addClass('active-page');
    var newsContainerId = '#news-container' + pageIndex;
	$('.news-container').addClass('hidden').removeClass('animated bounceInDown bounceInUp');
	$(newsContainerId).removeClass('hidden').addClass('animated bounceInDown');
		
});

$('a[href^="#"]').click(function () { 
			    elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top;
				$('body').animate( { scrollTop: destination }, 1000 );
		   });









});