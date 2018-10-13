var z = "Running";
function consoleZ(z) {
  console.log(z);
}
consoleZ(z);

var a = 10, b = 20;

function multiply(x, y) {
  console.log(x+ "*" +y);
}

multiply(a, b);
var x = [10, 2, 30];
console.log(x);

document.getElementById("photo").addEventListener("click", sayHi);

function sayHi() {
  document.getElementById("helloBox").innerHTML = "Hello";
  document.body.style.backgroundColor = rgb(255,130,255);
}
