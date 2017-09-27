jQuery(document).ready(function(){
    
    $(window).resize(function(){
        if ($(window).width() < 950){
        $(".menu ul li").click(function(){
        $(".menu").slideUp();
        });
    }
        else if ($(window).width() > 950){
            $(".menu ul li").click(function(){
            $(".menu").slideDown();
            });
        }
        $(".sizeIcon").height($(".sizeIcon").width());
        if ($(window).height() > 300){
        $("header").height($(window).height());
    }
    });
    
//=====================================================================================================
    if ($(window).height() > 300){
        $("header").height($(window).height());
    }
    $(".burger").click(function(){
        $(".menu").slideDown(500);
        });
    if ($(window).width() < 950){
        $(".menu ul li").click(function(){
        $(".menu").slideUp();
        });
    }
    $(".sizeIcon").height($(".sizeIcon").width());

    $('a[href^="#"]').click(function () { 
			    elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top;
				$('body').animate( { scrollTop: destination }, 1000 );
		   });

    $(".buttonForm").click(function(){
        $(".buttonForm").addClass("invisible");
        $(".form").fadeIn(1);
    });
    $(".send").click(function(){
        $(".form").fadeOut(1);
        $(".buttonForm").removeClass("invisible");
    });

    //=====================================================================================================

});
