
jQuery(document).ready(function(){
    $(".et-more-info").click(function($event){
        $("#et-des-container").css("opacity", "1");
        $("#et-des-container").css("pointer-events", "all");
        $("#et-des-container").css("transition", "0.3s");
        $("#et-des-block").css("top", "150px");
        $("#et-des-block").css("transition", "all 0.3s ease-in-out");
    })
    $("#et-close").click(function(){
        $("#et-des-container").css("opacity", "0");
        $("#et-des-container").css("pointer-events", "none");
        $("#et-des-container").css("transition", "0.3s");
        $("#et-des-block").css("top", "0px");
        $("#et-des-block").css("transition", "all 0.3s ease-out");
    })
    $("#et-des-container").click(function(event){
        if($(event.target).is('#et-des-container'))
        {
            $("#et-des-container").css("opacity", "0");
            $("#et-des-container").css("pointer-events", "none");
            $("#et-des-container").css("transition", "0.3s");
            $("#et-des-block").css("top", "0px");
            $("#et-des-block").css("transition", "all 0.3s ease-out");
        }
    })
})


