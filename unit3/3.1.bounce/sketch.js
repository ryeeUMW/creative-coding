function setup() {
  createCanvas(400, 400);
}

let x=60;
let y=100;
let xspeed = 2;
let yspeed = 3;

function draw() {
  background(255,150,255,80);

  circle(x, y, 50);

  // check for collision with left and right edge
  if (x < 25 | x > 375 ){ //changed the collition to be at the edge of the circle rather than the center of the circle
      xspeed = xspeed * -1; // reverse the x direction
      fill(random(10,250),random(10,250),random(10,250),255);//changing color when it hits the edge
      strokeWeight(random(1,10));
  }
  if (y < 25 | y > 375){
      yspeed = yspeed * -1; // reverse the y direction
      fill(random(10,250),random(10,250),random(10,250),255);//changing color when it hits the edge
      strokeWeight(random(1,10));
  }

  x = x + xspeed; // iterate x
  y = y + yspeed; // iterate y
  } 
