function setup() {
  // create the canvas
  createCanvas(900,1200);

  // disable animation
  noLoop();
}

//The art work i wanted to emulate was "untitles" by Vrea Molnar. The reason why I chose
//this one is because the way the rectangles lap over eacher caught my eye and I realized
//that this was something I could emulate with code. I decided to make the recatngles move
//up and down randomly so it changes everytime you refresh it because there was no
//apparent pattern to how the rectangles were positiioned.

function draw() {

  background(255);

  for (let x = 0; x < 36; x++){ //first row of rectangles
    push();
    translate(x * 22, 120);//let each rectangle be 4 pixels apart. (determined by the witdth of the rectangle)
    fill(255,0,0,80); //fill the recatngles to be red but midly transparent so you can see them overlap with eachother
    strokeWeight(0);//I started out with a bigger stokeweight but didnt like how even if the weight was 1, the stroke would still overlap with the shape and show the outline of the shape no matter the opacity.
    stroke(255,0,0,50); //same color as the rectangles fill to make it have no apparent outline
    rect(45,(random(0,70)),18,120); //skinny rectangles of varying start and end height
    pop();
    }

  for (let x = 0; x < 36; x++){ //second row of rectangles
    push();
    translate(x * 22, 220);//I made each row their own loops to allow for me to control how far apart each row is from one another to make sure they overlap is as close to proximity as the actual artwork i am emulating
    fill(255,0,0,80); 
    strokeWeight(0);
    stroke(255,0,0,50); 
    rect(35,(random(0,70)),18,120);
    pop();
    }

  for (let x = 0; x < 36; x++){//third row of rectangles.
    push();
    translate(x * 22, 330);
    fill(255,0,0,80); 
    strokeWeight(0);
    stroke(255,0,0,50); 
    rect(25,(random(0,70)),18,120); 
    pop();
    }

}

function mouseClicked(){
  draw();
}