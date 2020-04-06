var gatos = document.getElementsByClassName ("cat");
var counter = 0;
for (i = 0; gatos.length; i++ ){
    gatos[i].addEventListener("click" , function(){
        counter++;
        var frase = document.getElementById('legend');
        frase.innerHTML = "cliques: " + counter;
    });
}
/*var legenda = document.getElementById("legend");
    document.createElement("FIGCAPTION");
    var frase = document.createTextNode("teste " + i);
    legenda.appendChild(frase);
    var img = document.getElementsByClassName("cat");
    img.appendChild(legenda);*/