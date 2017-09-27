jQuery(document).ready(function(){
    
    $(".tabContent").not(":first").hide();
    $("nav ul li a:first").addClass("active");
    
    $("nav ul li").click(function() {
        $("nav ul li a").removeClass("active");
        $(this).find("a").addClass("active");
        $(".tabContent").hide();
        
        var selecTab = $(this).find("a").attr("href");
        $(selecTab).fadeIn();
        
	    $('html, body').animate({ scrollTop: $("header").offset().top }, 1);
    });
    
    $(".longBlock").height($(".fourBlock").height());
    $(".intersonoAndRadioBlock,.intersono,.radio").height($(".intersonoAndRadioBlock img").height());
    if ($(window).width() < 1000){
        $(".longBlock").height($(".movingBlock").height() / 100 * 90);
    }
});
