
var colors = ["red","green","blue","yellow","brown","orange"];
var secret = ["red","blue","blue","yellow"];
var p = [];
var g = [];
var row = 0;

/*
function initialize(){
  var b = document.getElementById("nextbutton");
  b.onclick(alert("done!!"));
}
*/

function nextRow(){
//alert("next!");
  row++;
  createBoxes();
}

// /*
function gradeMe(){
  var statString = "";
  var grades = [];
  var startPos = row*4;
  var endPos = startPos+3;
//  alert(`${startPos},${endPos}`);
  for (var i = startPos; i <= endPos; i++){
    p[i] = document.getElementById(`pos${i}`);
    };
/*
  p[0] = document.getElementById("pos0");
  p[1] = document.getElementById("pos1");
  p[2] = document.getElementById("pos2");
  p[3] = document.getElementById("pos3");
*/
  var posGraded = [false,false,false,false];
  var secretGraded = [false,false,false,false];
// test for black grades
  for (var i=0; i<4; i++){
//alert("inloop");
//alert(p[i].style.backgroundColor);
    if(p[startPos+i].style.backgroundColor == secret[i]){
 statString = statString + "black";
 //alert(statString);
      grades.push("black");
      posGraded[i] = true;
      secretGraded[i] = true;
    }
  }
// test for white grades.
// outer loop (i) filters out positions that were already graded
// inner loop (j) filters out secret positions that were already graded

  for (var i=0; i<4; i++){
    if (posGraded[i] != true){
      for (var j=0; j<4; j++){
        if (secretGraded[j] != true){
          if (secret[j] == p[startPos+i].style.backgroundColor) {
            grades.push("white");
 statString = statString + "white";
            secretGraded[j] = true;
            posGraded[i] = true;
          }
        }
      }
    }
  }
//  alert("check 1");

  for (var i = startPos; i <= endPos; i++){
    g[i] = document.getElementById(`g${i}`);
    };

  for (var i = startPos; i <= endPos; i++){
    g[i].style.backgroundColor = "grey"
  }
statString = statString + "/////"
var currentGrade = startPos;
  for (var i = 0; i<grades.length; i++){
    statString = statString + grades[i];
    g[currentGrade].style.backgroundColor = grades[i];
    currentGrade++
  }
//  */
// alert("done: "+statString);
nextRow();
}



function createBoxes(){
var top = 45+row*50;
for (var i=0; i<4; i++){
  var d = document.createElement("div");
  document.body.appendChild(d);
//d.setAttribute ("id",`pos${i}`)
  var x = row*4+i;
  d.id = `pos${x}`
  d.style.position = "absolute";
  d.style.height = "30px";
  d.style.width = "30px";
  d.style.borderStyle = "solid";
  d.style.borderWidth = 2;
  d.style.borderColor = "black";
  d.style.backgroundColor = colors[i];
  d.style.left = `${i*40+20}px`;
  d.style.top = `${top}px`;
  d.setAttribute ("onclick",`nextColor('pos${x}')`);
  //d.setAttribute ("onclick",`nextColor('yaw')`);
  //d.setAttribute ("onclick","alert('yay')");

//
// now the grade pegs
//

  var e = document.createElement("div");
  document.body.appendChild(e);
  e.id = `g${x}`
  e.style.position = "absolute";
  e.style.borderRadius = "4px";
  e.style.height="12px";
  e.style.width="12px";
  e.style.background = "grey";
  e.style.borderColor = "black";
  e.style.borderStyle = "solid";
  e.style.borderWidth = 1;
  l = `${(i%2)*20+200}px`;
  e.style.left = l;
  var t = top
  if (i > 1) {t=top+20};
  e.style.top = `${t}px`;
  e.setAttribute ("onclick",`nextGrade('g${x}')`);

  }
}

function nextColor(p){
  var el = document.getElementById(p);
  var c = el.style.backgroundColor;
  var x = colors.findIndex(a => a == c);
  var y = (x+1) % 6;
  el.style.backgroundColor = colors[y];

  }
  //alert(c);


function nextGrade(p){
  var el = document.getElementById(p);
  var c = el.style.backgroundColor;
  alert("grade"+c);
}
