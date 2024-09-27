function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}

//begining of code is taken from canvas

function draw() {
  background(220);

  translate(100,100);
  for (let x = 0; x < 8; x++){
   for (let y = 0; y < 8; y++){
      push();
      translate(x * 120, y * 120);
      fill(random(255), random(255), random(255)); //random fill colors
      stroke(random(255), random(255), random(255)); //random stroke colors
      strokeWeight(random(3,10)); //random stroke weight
      ellipse(0,0,(random(20,100))); //random size of circles
      pop();
    }
  }
}
