function openTabelBox() {
  let Hideenbox =document.getElementById("Box")
    Hideenbox.style.display ="none";
    let box = document.getElementById("library-table-section")
    box.style.display = "block";
}
function closeTabelBox(){
    let box = document.getElementById("library-table-section")
    box.style.display = "none";
    let Hideenbox =document.getElementById("Box")
    Hideenbox.style.display ="flex";
}
  