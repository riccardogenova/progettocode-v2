//3.Cambia lo sfondo di una pagina. Crea un dropdown con diverse opzioni di colore. Quando un'opzione viene selezionata, cambia il colore di sfondo della pagina usando JavaScript.
var element = document.getElementById("options");
function change(){
  document.body.style.backgroundColor = element.value;
}
element.addEventListener('input', change);
