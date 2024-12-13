//for this project I wanted to play around with more 3d objects
//I fell in love with how the normalMaterial() looks instead of a solid color
//So instead of circles I changed them to be toruses to find out how it would like
//though the end product is not what i expected i enjoy how it looks and intend to keep it!


let ripplex = 0; //spawning a ripple
let rippley = 0;
let rippled = 50;
let xspeed = 1;
let yspeed = 1;

let ripplers = []; //empty ripple array to add to when the mouse is pressed

  class Rippler { //defining a class for the ripples so each ripple can know what they are doing individually
  constructor(x,y) {
    this.x = x,
    this.y = y,
    this.d = 0
  }
  update() { //drawing a new ripple
    this.d += 1;
    torus(12,12,this.d);
  }
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(15);

  rippled += 1;
  torus(ripplex,rippley,rippled);

  for (let i = 0; i < ripplers.length; i++){ //creating a new ripple as many times as the mouse is pressed
    ripplers[i].update();
  }
}

function mousePressed() { //mouse pressing function
  normalMaterial();
  ripplex = mouseX;
  rippley = mouseY;
  rippled = 0;

  ripplers.push(new Rippler (mouseX,mouseY)); //creating a new ripple in the ripple class
}