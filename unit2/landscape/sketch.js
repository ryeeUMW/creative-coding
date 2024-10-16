function preload(){
  // load the image from a file
	img = loadImage('/Users/a2190/Documents/GitHub/creative-coding/unit2/landscape/DUKE_N_DALLAS!!!!.jpg');
}

function setup() {

  // create the canvas
  createCanvas(800, 800);
  
}

function draw() {
  background(220);

  // render the image
  image(img,10,10,100,100);
}