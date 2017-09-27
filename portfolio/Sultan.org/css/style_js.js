$(document).ready(function($){
     $('.tab_content').hide();
     $('.tab_content:first').show();
     $('.tabs_ul li:first').addClass('activeted_li');
     $('.tabs_ul li').click(function(event){
          $('.tabs_ul li').removeClass('activeted_li');
          $(this).addClass('activeted_li');
          $('.tab_content').hide();
          
          var selectTab = $(this).find('a').attr("href");
          $(selectTab).fadeIn();
     });
     
     
$('.reklama_block').height($('.reklama_block').width());
$(window).resize(function (){
$('.reklama_block').height($('.reklama_block').width());}); 
$('.img_html').height($('.img_html').width());     
$(window).resize(function (){
$('.img_html').height($('.img_html').width());});
    
$(window).resize(function (){
$('.reklama_bottom').width($('.tabs_child_div').width());
$('.reklama_bottom').height($('.reklama_bottom').width());     
});
    
$('.reklama_bottom').width($('.tabs_child_div').width());     
$('.reklama_bottom').height($('.reklama_bottom').width());      
     
});
