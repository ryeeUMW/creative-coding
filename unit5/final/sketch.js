
//for my final project I am playing with 3D object using WEBGL in p5.js
//my idea is that I will have one 3D object to start and the use than spin it but when
//the mouse is released the shape turns into a different 3D shape that has the same mouse released quality as the first
//these were my intentions for this project but I found miyself running into roadblocks
//as seen in the code here all the commented out code is what i used to attempt to
//change the shape when the mouse is released all at different points.
//the main issue that i came accross was once I figured out how to change the shape (the idea was from this webeditor on
//p5js https://editor.p5js.org/tannerjhuck/sketches/gKhb5qngR) the issue was that the animation was not disabled
//so that meant that the code was flashiing at me. However, when i disabled the animation using noLoop()
//I could no longer move the shapes orbit with my mouse. So i opted to just change the color when the mouse is released
//when I did that I noticed that the mouseRealese function was working but it didnt like when I had elements
//like fill and stroke in the draw function, otherwise when i go to change the fill or stroke in the mouseReleased function
//nothing would change. So in the interest of time i opted to not have fill or stroke in the draw function and just let it 
//change to a random fill color and a white stroke when the first mouse release happens.

//I really liked how with the color fill i chose and the slight opacity that this shape looks like the
//EPCOT ball in disney world and I love that about this project.


//WEBGL code is from p5js.org

function setup() {
  createCanvas(800, 800, WEBGL); //use the WEBGL program
}

function draw() {
  background(0);

  //   //generate random 3D shape type where box=0, sphere=1, and cone=2
  // let shapeType = floor(random(3));

  // //drawing the shape based on the randomly picked number
  // if (shapeType === 0){
  // fill(random(255), random(0), random(255), 100);
  // orbitControl();
  // stroke('white');
  // box(255);
  // }
  // else if (shapeType === 1){
  // fill(random(255), random(0), random(255), 100);
  // orbitControl();
  // stroke('white');
  // sphere(255);
  // }
  // else {
  // fill(random(255), random(0), random(255), 100);
  // orbitControl();
  // stroke('white');
  // cone(255);
  // }


  // Enable orbiting with the mouse.
  orbitControl();
  // Draw a 3D shape
  sphere(255);

}

function mouseReleased(){

  stroke('white');
  fill(random(255), random(0), random(255), 100);

    //generate random 3D shape type where box=0, sphere=1, and cone=2
  // let shapeType = floor(random(3));

  // //drawing the shape based on the randomly picked number
  // if (shapeType === 0){
  // fill(random(255), random(0), random(255), 100);
  // orbitControl();
  // stroke('white');
  // box(255);
  // }
  // else if (shapeType === 1){
  // fill(random(255), random(0), random(255), 100);
  // orbitControl();
  // stroke('white');
  // sphere(255);
  // }
  // else {
  // fill(random(255), random(0), random(255), 100);
  // orbitControl();
  // stroke('white');
  // cone(255);
  // }

  // // Draw a random 3D shape
  // draw(random(shape));
}
