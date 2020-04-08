var gatos = document.getElementsByClassName("cat");
var cats = [];

for (var i =0; i < gatos.length; i++) {
    cats.push({ element: gatos[i], counter: 0});
    gatos[i].addEventListener("click", (function(index, counter){
        return function () {
            counter++;
            var legendElement = document.getElementById('legend' + index);
            legendElement.innerHTML = "cliques: " + counter;   
        }
    })(i, cats[i].counter))
}