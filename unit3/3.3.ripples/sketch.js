let ripplers = [];

function setup() {
  createCanvas(800, 800);

}
  class Rippler{
  constructor(x,y){
    this.x = x,
    this.y = y,
    this.diameter = 0
  }
}

function draw() {
  background(220);

  for (let i = 0; i < ripplers.length; i++){
    ripplers[i].draw();
  }
}

function mousePressed(){
draw(circle(mouseX,mouseY,10));
log.console;
}