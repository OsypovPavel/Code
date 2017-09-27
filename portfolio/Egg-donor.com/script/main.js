$(".language").click(function(){
    $(".language ul").slideToggle(500);
    $(".language p i").toggleClass("active-lang");
    
});
$(".more-menu").click(function(){
    $(".more-menu ul").slideToggle(500);
    $(".pop-menu1,.pop-menu2,.pop-menu3,.pop-menu4").slideUp(500);
});
$(".burger").click(function(){
    $(".nav-block").slideToggle(500);
});

$("#pop-menu1").click(function(){
    $(".pop-menu1").slideToggle(500);
    $(".pop-menu2,.pop-menu3,.pop-menu4,.more-menu ul").slideUp(500);
});
$("#pop-menu2").click(function(){
    $(".pop-menu2").slideToggle(500);
    $(".pop-menu1,.pop-menu3,.pop-menu4,.more-menu ul").slideUp(500);
});
$("#pop-menu3").click(function(){
    $(".pop-menu3").slideToggle(500);
    $(".pop-menu1,.pop-menu2,.pop-menu4,.more-menu ul").slideUp(500);
});
$("#pop-menu4").click(function(){
    $(".pop-menu4").slideToggle(500);
    $(".pop-menu1,.pop-menu2,.pop-menu3,.more-menu ul").slideUp(500);
});

$(".choise-contact p").click(function(){
    $(".choise-contact ul").slideToggle(500);
    $(".choise-contact p").toggleClass("choise-contact-active");
});
$(".sidebar-content").click(function(){
    $(".sidebar-content").toggleClass("sidebar-show");
    $(".icon-show-slider").fadeToggle();
});

$("#ul-list-foot1").click(function(){
    $(".foot-ul1").slideToggle(500);
    $(".foot-ul2,.foot-ul3,.foot-ul4,.foot-ul5").slideUp(500);
});
$("#ul-list-foot2").click(function(){
    $(".foot-ul2").slideToggle(500);
    $(".foot-ul1,.foot-ul3,.foot-ul4,.foot-ul5").slideUp(500);
});
$("#ul-list-foot3").click(function(){
    $(".foot-ul3").slideToggle(500);
    $(".foot-ul1,.foot-ul2,.foot-ul4,.foot-ul5").slideUp(500);
});
$("#ul-list-foot4").click(function(){
    $(".foot-ul4").slideToggle(500);
    $(".foot-ul1,.foot-ul2,.foot-ul3,.foot-ul5").slideUp(500);
});
$("#ul-list-foot5").click(function(){
    $(".foot-ul5").slideToggle(500);
    $(".foot-ul1,.foot-ul2,.foot-ul3,.foot-ul4").slideUp(500);
});


