var board = [];
var rows = 8;
var columns = 8;

window.onload = function () {
  startGame();
};

function startGame()  {
  for (let r = 0; r < rows; r++)  {
    let row = [];
    for (let c = 0; c < columns; c++) {
      //<div id="0-0"></div>
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.addEventListener("click", itemClick);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }

  console.log(board);
}

function itemClick() {
  let tile = this;
  tile.style.backgroundColor = "transparent";
}
