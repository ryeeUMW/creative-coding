let bouncers = [];

class Bouncer {
  constructor(){
    this.x=200;
    this.y=200;
    this.xspeed=2
    this.yspeed=3;
  }
  update(){
  background(170,150,160,100);
  // fill(random(10,250),random(10,250),random(10,250),255);
  // strokeWeight(random(1,10));
  circle(this.x, this.y, 50);

  // check for collision with left and right edge
  if (this.x < 25 | this.x > 375 ){ //changed the collition to be at the edge of the circle rather than the center of the circle
      this.xspeed = this.xspeed * -1; // reverse the x direction
      fill(random(10,250),random(10,250),random(10,250),255);//changing color when it hits the edge
      strokeWeight(random(1,10));
  }
  if (this.y < 25 | this.y > 375){
      this.yspeed = this.yspeed * -1; // reverse the y direction
      fill(random(10,250),random(10,250),random(10,250),255);//changing color when it hits the edge
      strokeWeight(random(1,10));
  }

  this.x = this.x + this.xspeed; // iterate x
  this.y = this.y + this.yspeed; // iterate y
  }
}

function setup() {
  createCanvas(400, 400);

  for (let b = 0; b < 20; b++){
    bouncers.push(new Bouncer());
  }
}


function draw() {
  for (let r = 0; r < bouncers.length; r++){
    bouncers[r].update();
  }
  // background(170,150,160,100);

  // circle(x, y, 50);

  // // check for collision with left and right edge
  // if (x < 25 | x > 375 ){ //changed the collition to be at the edge of the circle rather than the center of the circle
  //     xspeed = xspeed * -1; // reverse the x direction
  //     fill(random(10,250),random(10,250),random(10,250),255);//changing color when it hits the edge
  //     strokeWeight(random(1,10));
  // }
  // if (y < 25 | y > 375){
  //     yspeed = yspeed * -1; // reverse the y direction
  //     fill(random(10,250),random(10,250),random(10,250),255);//changing color when it hits the edge
  //     strokeWeight(random(1,10));
  // }

  // x = x + xspeed; // iterate x
  // y = y + yspeed; // iterate y
  }
  function mousePressed(){//making the circle change color and stroke weight when the mouse is pressed
    fill(random(10,250),random(10,250),random(10,250),255);
    strokeWeight(random(1,10));
  }
