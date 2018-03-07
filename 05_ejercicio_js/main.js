$("document").ready(function() {
    $("#carrete").hide();
});

$(document).on("click" , function() {
    $("h1").hide();
    $("#carrete").show();
});


$("img").hover(function(){
    $(this).width(400)   //si quitas el this va haciendo grandes todas
}, 

function(){
    $(this).width(250)
});