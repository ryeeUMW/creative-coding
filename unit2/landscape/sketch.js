
function setup() {

  // create the canvas
  createCanvas(800, 800);
  noLoop();
  
}

function draw() {
  background(0,0,255,100);

//I did my landscape in a night time scene with buildings in the background.
//my inspiration is from the soft landscapes website https://botsin.space/@softlandscapes
//i really like the color scheme used in those landscapes and wanted to recreate that in my own way



//create color gradient using lerpColor()
let from = color(25); //a light black
let to = color(100); //a lighter black
let inter = lerpColor(from, to, 0.5);//finding the middle color

//creating the stars at the top of the landscape
for (let x = 0; x <= width; x+=10){

  let offset = randomGaussian(0,150); //using randomGaussian to create a random section of dots at the top of the page.
  let y = height/5 + offset;   
  
  stroke('yellow');
  circle(x,y,3);
}
//creating the moon
  stroke('white');
  fill('white');
  circle(90,90,100);

noStroke();

//creating the buildings letting it be random but restricted in their respective section on the cavnas
//with varying size
fill(from);
  rect(random(200,650),random(600,800),random(60,100),400);

fill(from);
  rect(random(100,250),random(230,260),random(60,100),400);
  
  fill(from);
  rect(random(600,800),random(230,260),random(60,100),400);
  
  fill(from);
  rect(random(750,300),random(230,260),random(60,100),400);
  translate(0,300);

//creating the mountains
beginShape();
for (x =0; x <=width; x++){
  let y = noise(x*0.005)*height/7;
  fill(from);
  vertex(x,y);
  }
  vertex(width +100,height);
  vertex(0,height);
endShape();

beginShape();
for (x =0; x <=width; x++){
  let y = noise(x*0.006)*height/2;
  fill(inter);
  vertex(x,y);
  }
  vertex(width +100,height);
  vertex(0,height);
endShape();

translate(0,50)

beginShape();
for (x =0; x <=width; x++){
  let y = noise(x*0.002)*height/1.25;
  fill(to);
  vertex(x,y);
  }
  vertex(width +100, height);
  vertex(0,height);
endShape();
}
