//================ТАБЫ===============================
$(".tab_item").not(":first").hide();
$(".tab:first-child .tringle").addClass('triangle-down');
$(".tab").click(function() {
     $(".tab").removeClass("active").eq($(this).index()).addClass("active");
     $(".tab_item").hide().eq($(this).index()).fadeIn();
     $('.triangle-down').removeClass('triangle-down');
     $(this).find('span').addClass('triangle-down');
}).eq(0).addClass("active");


//=======================Высота блоков айпада==========
if($(window).width() > 570){
$(".text_left,.text_right").height($(".ipad_img").height());
$(window).resize(function(){$(".text_left,.text_right").height($(".ipad_img").height())});
     }

