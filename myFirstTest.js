
var colors = ["red","green","blue","yellow","brown","orange"];

function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if(n1.value != '' && n2.value != '') {
        if(n1.value == n2.value) {
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}

function addColorBlock(){
  //var d = document.getElementById("board1");
var d = document.createElement("div");
d.id = "board2";
document.body.appendChild(d);
  d.style.position = "absolute";
  d.style.height = "30px";
  d.style.width = "400px";
  d.style.background = "red";
  d.style.left = "80px";
  d.style.top = "200px";
  d.onclick = function() {test()};

//  document.getElementById("board2").onclick = function() {test()};
//  e.appendChild(d);
}

function test() {alert("test")}

function nextColor(p){
  //var p = `pos${index}`;
  var el = document.getElementById(p);
  var c = el.style.backgroundColor;
  alert(c);
}
function arrange() {
  var d = document.getElementById("board1");
//var d = document.createElement("div");
  d.style.position = "absolute";
  d.style.height = "30px";
  d.style.width = "400px";
  d.style.background = "green";
  d.style.left = "80px";
  d.style.top = "160px";
  var x;
var l;
for (var i=0; i<4; i++) {
  var p = `pos${i}`;
  x = document.getElementById(p);
  x.style.position = "absolute";
  x.style.borderRadius = "15px";
  x.style.height="30px";
  x.style.width="30px";
  x.style.align="left";
  x.style.backgroundColor = colors[i];
  l = `${i*40+15}px`;
  x.style.left = l;
  x.style.top = "20px";
  var ii = i;
  x.onclick = function(){nextColor(p)};
  //if (i==0){x.onclick = function(){nextColor(0)};};
//  if (i==1){x.onclick = function(){nextColor(1)};};
//  if (i==2){x.onclick = function(){nextColor(2)};};
//  if (i==3){x.onclick = function(){nextColor(3)};};
}

for (var j=1; j<5; j++) {
  var g = `g${j}`;
  x = document.getElementById(g);
  x.style.position = "absolute";
  x.style.borderRadius = "3px";
  x.style.height="10px";
  x.style.width="10px";
  x.style.align="left";
  x.style.background = "white";
  l = `${(j%2)*20+220}px`;
  x.style.left = l;
  var t = 20;
  if (j > 2) {t=32};
  x.style.top = `${t}px`;
}
}
