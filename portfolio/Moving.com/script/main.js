$(document).ready(function(){
    $(".burger").click(function(){
        $(".list-menu ul").slideToggle(500);
        $(".burger i").toggleClass("burger-toggle-color");
        $(".burger i").toggleClass("burger-toggle-position");
        
    });
    $(".apartament").height($(".apartament").width());
    $(".anouser-offer").height($(".anouser-offer").width());
    $(".clining, .delivery, .piano, .storage").height($(".clining, .delivery, .piano, .storage").width());
    if ($(window).width() > 768){
        $(".mega").height($(".mega").width() / 2);
        $(".boxes").height($(".mega").width() / 2);
    }
    else{
        $(".mega").height($(".mega").width());
        $(".boxes").height($(".boxes").width() / 100 * 35);
    }
    $(window).resize(function(){
        $(".apartament").height($(".apartament").width());
        $(".anouser-offer").height($(".anouser-offer").width());
        $(".clining, .delivery, .piano, .storage").height($(".clining, .delivery, .piano, .storage").width());
        if ($(window).width() > 768){
        $(".mega").height($(".mega").width() / 2);
        $(".boxes").height($(".mega").width() / 2);
        }
        else{
        $(".mega").height($(".mega").width());
        $(".boxes").height($(".boxes").width() / 100 * 35);
        }
 });
    
    
});