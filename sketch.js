var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("Red")
  btn_red.position(100,50)
  btn_red.mousePressed(redColor)

  btn_green = createButton("Green")
  btn_green.position(150,50)
  btn_green.mousePressed(greenColor)
}
function draw() {
  background(r,g,b);
}

function redColor(){
  r = 255
  g = 0
  b = 0
}

function greenColor(){
  r = 0
  g = 255
  b = 100
}