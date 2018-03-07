$("document").ready(function() {

    
    $("#anuncio").text("Haz click para cambiar de color")
    .height(300)
    .width(300)
    .hide()
    .fadeIn(3000)
    .on("click" , function() {

      
          let colores = ["blue", "yellow" , "red" , "grey" , "green" , "orange" , "purple"];
          let random = colores[Math.floor(Math.random() * colores.length)];
         
         $("#anuncio").css('background-color' , random);
      })

});





