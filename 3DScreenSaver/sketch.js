let dia = 1;
let growAmount = 0.005;
let grow = true;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);

  angleMode(DEGREES);
  normalMaterial();
}

function draw() {
  background(0);

  push();
  rotateWithFrameCount();
  scale(dia);
  cone(50, 20);
  translate(0,-20,0);
  rotateX(180);
  cone(50,20);
  pop();

  if (dia > 20) {
    grow = false
  }
  if (dia < 2) {
    grow = true
  }
  
  if (grow == true) {
    dia += growAmount
  } else {
    dia -= growAmount
  }
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}