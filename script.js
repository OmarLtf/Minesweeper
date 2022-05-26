var square = document.getElementById("square");
var square2 = document.createElement("div");
square2.id = "square";
var body = document.getElementsByTagName("BODY")[0];

square.addEventListener("mousedown", changeSquareRed);
square.addEventListener("mouseup", changeSquareBlack);

function changeSquareRed() {
  square.style.backgroundColor = "red";
  body.appendChild(square2);
}

function changeSquareBlack() {
  square.style.backgroundColor = "black";
}
