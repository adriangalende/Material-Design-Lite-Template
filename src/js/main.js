$( document ).ready(function() {

    $('#puntitos').fadeOut().fadeIn();




    var background_image = "";
    var elemento = "";
    var procesoactivo = false;

    $('#trabajos-y-clientes').mouseover(function(e){
        console.log("in " + procesoactivo)
        if(e.target.tagName == "DIV" && e.target.className.split(" ")[0] == "filler" && !procesoactivo){
            procesoactivo = true;
            e.target.className = e.target.className.replace("filler","filler-hovered");
            background_image = e.target.style.backgroundImage;
            e.target.style = "";
            elemento = e;
        }
    });

    $('#trabajos-y-clientes').mouseout(function(e){
        console.log("out "+ procesoactivo)
        if(e.target.tagName == "DIV" && elemento.target.className.split(" ")[0] == "filler-hovered"){
            if(procesoactivo) {
                console.log(background_image)
                elemento.target.className = elemento.target.className.replace("filler-hovered", "filler");
                elemento.target.style.backgroundImage = background_image;
                procesoactivo = false;
            }
        }
    });

    function volverArriba(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
});