var gatos = document.getElementsByClassName ("cat");
for (i = 0; gatos.length; i++ ){
    var legenda = document.getElementById("legend");
    document.createElement("FIGCAPTION");
    var frase = document.createTextNode("teste " + i);
    legenda.appendChild(frase);
    var img = document.getElementsByClassName("cat");
    img.appendChild(legenda);
}
