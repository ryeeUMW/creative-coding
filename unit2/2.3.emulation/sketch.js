function setup() {
  // create the canvas
  createCanvas(900,1200);

  // disable animation
  noLoop();
}

function draw() {

  background(255);

  for (let x = 0; x < 36; x++){
    push();
    translate(x * 22, 120);
    fill(255,0,0,80); 
    strokeWeight(0);
    stroke(255,0,0,50); 
    rect(45,(random(0,70)),18,120);
    pop();
    }

  for (let x = 0; x < 36; x++){
    push();
    translate(x * 22, 220);
    fill(255,0,0,80); 
    strokeWeight(0);
    stroke(255,0,0,50); 
    rect(35,(random(0,70)),18,120);
    pop();
    }

  for (let x = 0; x < 36; x++){
    push();
    translate(x * 22, 330);
    fill(255,0,0,80); 
    strokeWeight(0);
    stroke(255,0,0,50); 
    rect(25,(random(0,70)),18,120); 
    pop();
    }

}