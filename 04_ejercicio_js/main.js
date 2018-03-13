

$("Document").ready (function() {
    $("#anuncio").text("Hola")
    .width (300)
    .height(300)
    .hide()
    .fadeIn(3000)
});

$("#anuncio").on("click", function(){
    $("#anuncio").css("background-color", color=colores[Math.floor(Math.random() * colores.length)])
});

let colores = ["blue","red","violet","green","yellow","pink"]
let color = colores[Math.floor(Math.random() * colores.lenght)];



