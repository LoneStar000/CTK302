let state = -1;
let timer = 0;
let ffxiv, Mia, Rhys;
let s1;

function preload(){
  s1 = loadSound("assets/mist.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ffxiv = loadImage("assets/ffxiv.png");
  Mia = loadImage("assets/Mia.JPG");
  Rhys = loadImage("assets/Rhys.jpg");
  imageMode(CENTER);
}

function draw() {
  background(10, 10, 110);
  
  //table
  fill(60);
  rect(0, height/2 - 30, width, 100);
  
  //monitor
  fill(130);
  rect(width/2 -250, height/2 -300, 500, 300);
  
  fill(90);
  rect(width/2 -225, height/2 -275, 450, 250);
  
  fill(200);
  text('fill(190 arc(width/2, 120, 120, 120, PI); \narc(340, 120,  100, 100, PI, TWO_PI); \n//arc(340, 120, 100, 160, TWO_', width/2 - 200, height/2 - 250);
  
  
  
  //The Designer
  //head
  fill(190);
  arc(width/2, 120, 120, 120, PI, TWO_PI);
  
  arc(width/2, 120, 120, 170, TWO_PI, PI);
  
  //chair
  strokeWeight(0);
  fill(80);
   arc(width/2, 250, 300, 100, PI, TWO_PI);

  rect(width/2 - 150, 250, 300, 200);
  fill(30);

  
  //text box
  fill(120);
  rect(0, 400, width, height);
  fill(0);
  textSize(20);
  
  
  
  //timer and switch state
  switch (state)
  {
    case -1:
      text("This is Nathan Long, its October 12, 2022. \nCurrently, Nathan is trying to figure out what he wants to do for his mp2 project. \n Sadly, Nathan's starting to daydream of things he wants to do. \nInstead, of doing his homework.", 10, 430);
      
      textAlign(CENTER);
      fill(240);
      text("Click, to dream", width/2, 670);
      textAlign(LEFT);
      break;
      
    case 0: 
      fill(250);
    ellipse(width/2 + 100, height/2 - 200, 50, 50);
      break;
  
    case 1: 
 
       fill(250);
       ellipse(width/2 + 100, height/2 - 200, 50, 50);
       ellipse(width/2 + 150, height/2 - 250, 50, 50);

       if(!s1.isPlaying()){
        s1.play();
       }
      break;
  
    case 2: 

      fill(250);
       ellipse(width/2 + 100, height/2 - 200, 50, 50);
       ellipse(width/2 + 150, height/2 - 250, 50, 50);
      strokeWeight(0);
       ellipse(width/2 + 350, height/2 - 240, 100, 100);
      ellipse(width/2 + 250, height/2 - 240, 100, 100);
      ellipse(width/2 + 100, height/2 - 290, 100, 100);
      ellipse(width/2 + 150, height/2 - 290, 100, 100);
      ellipse(width/2 + 200, height/2 - 290, 100, 100);
      ellipse(width/2 + 250, height/2 - 290, 100, 100);
      ellipse(width/2 + 300, height/2 - 290, 100, 100);
      ellipse(width/2 + 350, height/2 - 290, 100, 100);
      ellipse(width/2 + 220, height/2 - 320, 100, 100);
      ellipse(width/2 + 290, height/2 - 320, 100, 100);
      break;
      
      case 3:
        background('white');
        textAlign(CENTER);
        fill(20);
        text("FFXIV", width/2, 30);
     
        image(ffxiv, width/2, height/2, width - 100, height - 100);
      break;

      case 4:
        background('white');
        textAlign(CENTER);
        fill(20);
        text("Designing Rhys III, for Web Video", width/2, 30);

        image(Rhys, width/2, height/2, width - 600, height - 100);
      break;

    case 5:
      background('white');
      textAlign(CENTER);
        fill(20);
        text("Attempting to sketch again", width/2, 30);

        image(Mia, width/2, height/2, width - 200, height - 100);
    break;

    case 6:
      textAlign(LEFT);
      text("Perhaps, for now. It is best to let him rest. \nSome say dreams can help a person think.", 10, 430);

      s1.stop();
    break;
  }

  //timer
  timer++;
if(timer > 8*60 && state > -1)
{
  timer = 0;
  state++;
  if(state > 6)
  {
    state = -1;
  }
}
}
  
function mouseReleased() {
if(state <= -1)
{
  state++;
}

  }

function touchStarted() {
  getAudioContext().resume();
}


