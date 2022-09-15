var ar = []
let light = 0;

function preload(){
  music = loadSound("assets/shadow.mp3");
}

function setup() {
  createCanvas(720, 500);
  //cut off at 400 width
  for(var i = 0; i < 200; i++) {
    ar[i] = new rain();
  }
  music.loop();
}




function draw() {
  background(60);
  noStroke();
  
  //ground
  fill(40);
  rect(0, 330, 720, 330);
  
    //lamp
  fill(70);
  rect(600, 20, 10, 320);
  rect(100, 20, 10, 320);
  
    //light
  light = color(250, 250, 0, 80);
  
  if(mouseIsPressed){
    light = color(0,0,0,0);
  }
  
  fill(light)
  triangle(605, 20, 850, 360, 380, 360);
  triangle(105, 20, -150, 360, 350, 360);
  
  
  fill(85);
  rect(580, 20, 50, 20);
  rect(80, 20, 50, 20);
  

  
  //rain
  for(var i = 0; i < 200; i++) {
  ar[i].show();
  ar[i].update();
}
  
//The Shadow
  //head
  fill(45);
  arc(340, 120, 120, 120, PI, TWO_PI);
  
  arc(340, 120, 120, 170, TWO_PI, PI);
  
  fill(30);
  arc(340, 120, 100, 100, PI, TWO_PI);
  arc(340, 120, 100, 160, TWO_PI, PI);
  
  //eyes
  if(mouseIsPressed){
    fill(250, 0, 0);
    ellipse(320, 110, 10);
   ellipse(360, 110, 10);
  }
  
  //torso
  fill(45);
   arc(340, 250, 200, 100, PI, TWO_PI);
  rect(240, 250, 200, 200);
  fill(30);
  triangle(340, 210, 330, 400, 290, 400 );
  
  //text box
  fill(120);
  rect(0, 400, 720, 100);
  fill(0);
  textSize(20);
  text("One should be careful when traveling in the night.....", 10, 430);
  
  if(mouseIsPressed){
    fill(150, 0, 0)
    text("...FOR I AM THE SHADOW,", 20, 460);
    text("THAT DEVOURS THE LIGHT.", 50, 480);
  }
  
  
  fill(200)
  //tracker
  text(mouseX +"," + mouseY, 20, 20);
}

function mouseReleased() {
  if(music.isPlaying()){
    //music.pause();
  }
  else{
    music.play();
  }

  light = color(0,0,0,0);

  fill(250, 0, 0);
    ellipse(320, 110, 10);
    ellipse(360, 110, 10);

  fill(150, 0, 0)
    text("...FOR I AM THE SHADOW,", 20, 460);
    text("THAT DEVOURS THE LIGHT.", 50, 480);
}

function touchStarted() {
  getAudioContext().resume();
}

function rain() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
  }
}