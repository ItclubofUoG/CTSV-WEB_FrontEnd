let n = 0;
jQuery(document).ready(function(){
    $(".menu-control").click(function(){
        $(".lv2-menu-bar").slideToggle();
        if(n%2==0){
            $(".menu-drop-icon").css("transform", "rotate(0deg)");
            $(".menu-drop-icon").css("transition", "0.3s");
            n++;
        }else{
            $(".menu-drop-icon").css("transform", "rotate(-90deg)");
            $(".menu-drop-icon").css("transition", "0.3s");
            n++;
        }
    });
});


jQuery(document).ready(function(){
    $(".respo-icon").click(function(){
        $(".menu-bar").slideToggle();
    })
})