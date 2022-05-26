var square = document.getElementById("square");
var square2 = document.createElement("div");
square2.id = "square";
var body = document.getElementsByTagName("BODY")[0];

square.addEventListener("click", changeSquareRed);
square2.addEventListener("click", changeSquareRed2);

function changeSquareRed() {
  square.style.backgroundColor = generateRandomColor();
  body.appendChild(square2);
}

function changeSquareRed2() {
  square2.style.backgroundColor = generateRandomColor();
  body.appendChild(square);
}

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215.
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
