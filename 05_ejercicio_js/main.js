$("Document").ready(function(){
    $("#carrete").hide()
    $("h1").show()
});

$(document).on("click", function() {
    $("#carrete").show()
    $("h1").hide()
});

$("img").on("mouseover", function(){
    $(this).css("width", "300px")
});

$("img").on("mouseout", function(){
    $(this).css("width", "250px")
});