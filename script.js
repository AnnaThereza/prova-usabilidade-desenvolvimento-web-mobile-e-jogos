
window.onload = function() {
    document.getElementById("userInput").focus();
  };

function addItem() {
    var novoItem = document.getElementById("userInput").value;
    var h = document.createElement("li");
    var t = document.createTextNode(novoItem);
    h.appendChild(t);
    document.body.appendChild(h);
    h.addEventListener("click", function(){
        h.style.textDecoration = "line-through";
    })
    document.getElementById('userInput').value='';
    document.getElementById("userInput").focus(); 
}