/*
part 1
- Have a box on the screen++++++++++++++++++++++++++++++++++++++++++++++
- When box is clicked make it disappear+++++++++++++++++++++++++++++++++
- When the box is clicked, it reappears after 3 second(research)++++++++
- Measure time between shape appearing and being clicked.+++++++++++++++
- output that time++++++++++++++++++++++++++++++++++++++++++++++++++++++

Part 2
- Random delay time+++++++++++++++++++++++++++++++++++++++++++++++++++++
- Random location on screen++++++++++++
- Random shape++++++++++++++++++++++
- Random color++++++++++++++++++++++

*/
var startTime;
var endTime;
var timeTaken;
var shape = ['square', 'circle', 'triangleUp', 'oval', 'parallelogram']

function shapeChange() {
  var randomnum = Math.round(Math.random()*4)
  document.getElementById('box').className = shape[randomnum];
}
function appear() {
  shapeChange();
  //random location
  var RandomPosition1 = Math.round(Math.random()*95);
  var RandomPosition2 = Math.round(Math.random()*80);
  var RandomColor = "#" + ((1<<24)*Math.random() | 0).toString(16);

  RandomPositionLeft = (RandomPosition1+"vw");
  RandomPositionTop = (RandomPosition2 + "vh");

  document.getElementById('box').style.position = "relative";
  document.getElementById('box').style.left = RandomPositionLeft;
  document.getElementById('box').style.top = RandomPositionTop;

  document.getElementById('box').style.display = "block";
  document.getElementById('box').style.backgroundColor = RandomColor;
  startTime = new Date();      // for date Date.now() function can also be used.
}
window.onload = appear();

function disappear() {
  endTime = new Date();
  document.getElementById('box').style.display = "none";
  timeTaken = ((endTime - startTime)/1000);
  document.getElementById('showTime').innerHTML = "Time (sec): " + timeTaken;

  //Random time
  var RandomTime = (Math.round(Math.random()*10000))/2;
  //alert(RandomTime);
  //appear
  setTimeout(appear, RandomTime);

}
