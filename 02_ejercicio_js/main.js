$("Document").ready(function(){
    $("#mensaje_img1")
    .hide()
});

$("img1").hover(function(){
    $("#mensaje_img1").show()
}, function(){
    $("#mensaje_img1").hide();
});