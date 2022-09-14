function setup() {
  createCanvas(720, 400);
  
}




function draw() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  background(60);
  noStroke();

  //character and ears
  //fill(220);
  //triangle(240, 110, 220, 140, 220, 100);
  
  //fill(220);
  //triangle(80, 20, 60, 50, 80, 50);

  //fill(255);
  //ellipse(252, 144, 72, 72);
  
  //window
  fill(110);
  rect(20, 60, 180, 180);
  
  fill(color(0, 0, 200));
  rect(30, 70, 160, 160);
  
  fill(110);
  rect(30, 145, 160, 10);
  rect(105, 70, 10, 160);
  
  //ground
  fill(102);
  rect(0, 330, 720, 330);
  
  //throne
  fill(200);
  rect(250, 120, 190, 250);
  
  fill(180);
  rect(250,260, 190, 110),
  
  fill(230);
  rect(220, 220, 50, 150);
  rect(420, 220, 50, 150);
  


//designing table
  
  fill(250);
  rect(580, 260, 20, 100);
  
  fill(205);
  arc(590, 200, 200, 200, 0, PI);
  
  //tracker
  text(mouseX +"," + mouseY, 20, 20)
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

