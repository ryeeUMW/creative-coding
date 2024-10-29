let ripplex = 0;
let rippley = 0;
let rippled = 50;

let ripplers = [];

  class Rippler {
  constructor(x,y) {
    this.x = x,
    this.y = y,
    this.d = 0
  }
  update() {
    this.d += 1;
    circle(this.x,this.y,this.d);
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(15);
  stroke('pink');
  strokeWeight(5);
  noFill();

  rippled += 1;
  circle(ripplex,rippley,rippled);

  for (let i = 0; i < ripplers.length; i++){
    ripplers[i].update();
  }
}

function mousePressed() {
  stroke('pink');
  ripplex = mouseX;
  rippley = mouseY;
  rippled = 0;

  ripplers.push(new Rippler (mouseX,mouseY));
}