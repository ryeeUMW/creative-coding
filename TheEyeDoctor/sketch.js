function setup() {
  // create a canvas
  createCanvas(1200, 1200);
  // disable animation
  noLoop();
}

//begining of code is taken from canvas

function draw() {
  background(220);

  let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let choice = random(letters);

  translate(100,100);
  for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){
      push();
      translate(x * 120, y * 120);
      textSize(random(6,22));
      text(choice,x,y);
      pop();
    }
  }
}
function mousePressed() {
  background(0);
}
function mouseReleased(){
  draw();
  translate(-100,-100);
}
