let ripplex = 0; //spawning a ripple
let rippley = 0;
let rippled = 50;

let ripplers = []; //empty ripple array to add to when the mouse is pressed

  class Rippler { //defining a class for the ripples so each ripple can know what they are doing individually
  constructor(x,y) {
    this.x = x,
    this.y = y,
    this.d = 0
  }
  update() { //drawing a new ripple
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

  for (let i = 0; i < ripplers.length; i++){ //creating a new ripple as many times as the mouse is pressed
    ripplers[i].update();
  }
}

function mousePressed() { //mouse pressing function
  stroke('pink');
  ripplex = mouseX;
  rippley = mouseY;
  rippled = 0;

  ripplers.push(new Rippler (mouseX,mouseY)); //creating a new ripple in the ripple class
}