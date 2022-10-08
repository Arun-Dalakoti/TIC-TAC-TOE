var square1;
var square2;
var square3;
var square4;
var square5;
var square6;
var square7;
var square8;
var square9;
var moves = 0;

var IDs = [
  "square1",
  "square2",
  "square3",
  "square4",
  "square5",
  "square6",
  "square7",
  "square8",
  "square9",
];

function clicker(id) {
  if (moves == 0 || moves == 2 || moves % 2 == 0) {
    document.getElementById(id).innerHTML = "X";
  } else document.getElementById(id).innerHTML = "O";

  document.getElementById(id).onclick = null;

  moves++;

  if (moves == 9) {
    userX();
    document.getElementById("h1").innerHTML = "IT IS A DRAW!";
    let h1 = document.getElementById("h1");
    h1.style.color = "black";
    unclick();
  }

  userX();
}

function state() {
  square1 = document.getElementById("square1").innerHTML;
  square2 = document.getElementById("square2").innerHTML;
  square3 = document.getElementById("square3").innerHTML;
  square4 = document.getElementById("square4").innerHTML;
  square5 = document.getElementById("square5").innerHTML;
  square6 = document.getElementById("square6").innerHTML;
  square7 = document.getElementById("square7").innerHTML;
  square8 = document.getElementById("square8").innerHTML;
  square9 = document.getElementById("square9").innerHTML;
}

let line = document.getElementById("line");

function userX() {
  state();

  if (square1 == "X" && square2 == "X" && square3 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_hori_1";
    h1.style.color = "black";

    unclick();
    return true;
  }

  if (square4 == "X" && square5 == "X" && square6 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_hori_2";
    h1.style.color = "black";
    unclick();
    return true;
  }

  if (square7 == "X" && square8 == "X" && square9 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_hori_3";
    h1.style.color = "black";
    unclick();
    return true;
  }

  if (square1 == "X" && square5 == "X" && square9 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_diagonal_1";
    h1.style.color = "black";
    unclick();
    return true;
  }

  if (square1 == "X" && square4 == "X" && square7 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_ver_1";
    h1.style.color = "black";
    unclick();
    return true;
  }
  if (square2 == "X" && square5 == "X" && square8 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_ver_2";
    h1.style.color = "black";
    unclick();
    return true;
  }
  if (square3 == "X" && square6 == "X" && square9 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_ver_3";
    h1.style.color = "black";
    unclick();
    return true;
  }

  if (square7 == "X" && square5 == "X" && square3 == "X") {
    document.getElementById("h1").innerHTML = "USER X WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_diagonal_2";
    h1.style.color = "black";
    unclick();
    return true;
  }

  userO();
  return false;
}

function userO() {
  if (square1 == "O" && square2 == "O" && square3 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_hori_1";
    h1.style.color = "black";
    unclick();
  }

  if (square4 == "O" && square5 == "O" && square6 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_hori_2";
    h1.style.color = "black";
    unclick();
  }

  if (square7 == "O" && square8 == "O" && square9 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_hori_3";
    h1.style.color = "black";
    unclick();
  }

  if (square1 == "O" && square5 == "O" && square9 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_diagonal_1";
    h1.style.color = "black";
    unclick();
  }

  if (square1 == "O" && square4 == "O" && square7 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_ver_1";
    h1.style.color = "black";
    unclick();
  }
  if (square2 == "O" && square5 == "O" && square8 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_ver_2";
    h1.style.color = "black";
    unclick();
  }
  if (square3 == "O" && square6 == "O" && square9 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_ver_3";
    h1.style.color = "black";
    unclick();
  }

  if (square7 == "O" && square5 == "O" && square3 == "O") {
    document.getElementById("h1").innerHTML = "USER O WINS!";
    let h1 = document.getElementById("h1");
    line.className = "line_diagonal_2";
    h1.style.color = "black";
    unclick();
  }
}

//Makes all squares unclickable
function unclick() {
  for (var i = 1; i < 10; i++) {
    document.getElementById("square" + i).onclick = null;
  }
}

function clickerAI(id) {
  document.getElementById(id).innerHTML = "X";

  document.getElementById(id).onclick = null;

  var index = IDs.indexOf(id);

  IDs.splice(index, 1);

  moves++;

  if (moves < 8 && !userX()) {
    AI();
  }

  if (moves == 9) {
    document.getElementById("h1").innerHTML = "IT IS A DRAW!";
    let h1 = document.getElementById("h1");
    h1.style.color = "black";
    unclick();
  }

  moves++;
  userX();
}

function AI() {
  len = IDs.length - 1;
  rand = Math.random();
  random = Math.round(rand * len);

  target = IDs[random];
  document.getElementById(target).innerHTML = "O";
  document.getElementById(target).onclick = null;

  index = IDs.indexOf(target);
  IDs.splice(index, 1);
}

function restart() {
  location.reload();
}
