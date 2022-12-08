var bubbles = [];

let url = "";

let state=0;

let i1,i2,i3,i4,i5,i6,i7,i8,i9;

let s1;

//Nathan additions below
let attack;
let attackPos;

let player;

function preload(){

s1= loadSound("assets/music.wav");

i1 = loadImage("assets/start.jpg");

i2 = loadImage("assets/game.jpg");

i3 = loadImage("assets/end.jpg");

i4 = loadImage("assets/mouse.png");

i5 = loadImage("assets/cloud1.png");

i6 = loadImage("assets/cloud2.png");

i7 = loadImage("assets/cloud3.png");

i8 = loadImage("assets/cloud4.png");

i9 = loadImage("assets/cloud5.png");
}

function setup() {

createCanvas(800, 800);


let key = "1b4BKXM6d0zwM4toJ4wkddn_IFPavadCIVmDuTjEld3s"

//let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet

url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

loadJSON(url, gotData);

// Regular setup code we usually have

ellipseMode(CENTER);

rectMode(CENTER);

//player initialized
player = createVector(400, 400);

//attackPos = createVector(0, 0);

}

function gotData(data) {

console.log(data); // Print the data in the console

// add each line to an array of bubbles

for (let i = 0; i < data.length; i++) {

bubbles.push(

new Bubble(

data[i]["What is something you're afraid of? (as little words as possible)"],

data[i]["On a scale of 1-5 how afraid of this are you?"]

)); // THESE NEED TO MATCH SPREADSHEET

}

}

function draw() {

  switch (state){

    case 0://start screen
    
    background(i1);

    textAlign(CENTER);
    textSize(20);
    text("click to ", width/2, 650);
    
    break;
    
    case 1://gameplay screen
    
    background(i2);
    
    for (let i = 0; i < bubbles.length; i++) {
    
    bubbles[i].display();
    
    //hitbox
    if (bubbles[i].pos.dist(player) < 100) {
      bubbles.splice(i, 1);
    
    }
    
    
    }
    
    s1.play;
    
    if(!s1.isPlaying()){
    
    s1.play();
    
    }
    
    
    //win conditions
    if(bubbles.length <= 0){
      state = 2;
    }
    
    //player code
    image(i4, player.x, player.y, 150, 150);
    checkForKeys();
    
    break;
    
    case 2://end game screen
    
    background(i3);

    // textAlign(CENTER);
    // textSize(20);
    // fill(10);
    // text("click to ", width/2, 400);
    
    s1.pause();
    
    break;
    
    }

}

//player movement function
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)){
    //attackPos.x -5;
    player.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    player.x += 5;
    //attackPos.x += 5;
  }
  if (keyIsDown(UP_ARROW)){
    player.y -= 5;
    //attackPos.x += 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    player.y += 5;
    //attackPos.x += 5;
  }
  // if (keyIsDown(90)){
  //     image(i4, player.x - 4, player.y + 25, 20, 20);
  //     attackPos = createVector(player.x -4, player.y + 100);
  //    }
  //    else{
  //     attackPos = createVector(0, 0);
  //    }

  //player boundaries
  if (player.x > 700)
  {
    player.x = 700;
  }

  if (player.x < -50)
  {
    player.x = -50;
  }

  if (player.y > 700)
  {
    player.y = 700;
  }
  if (player.y < -50)
  {
    player.y = -50;
  }

  }


function mouseReleased(){

  switch(state){
    case 0:
      //menu screen 
        state = 1;
      break;
      
    case 2: 
      //win state
      resetGame();
    state = 0;
      break;
      

}

}

function resetGame(){

  setup();
}



function touchStarted(){

getAudioContext().resume();

}

class Bubble {

  
  
constructor(fear, rating) {

// only the order of these parameters matters!

this.fear = fear;

this.rating = rating;

this.pos = createVector(random(width), random(height));

this.vel = createVector(random(2, 5), 0);


}

display() {

  //image organizer
  if(this.rating === '1')
  {
      image(i5,this.pos.x-10, this.pos.y-50,150,150);
  }

  if(this.rating === '2')
  {
      image(i6,this.pos.x-10, this.pos.y-50,150,150);
  }

  if(this.rating === '3')
  {
      image(i7,this.pos.x-10, this.pos.y-50,150,150);
  }

  if(this.rating === '4')
  {
      image(i8,this.pos.x-10, this.pos.y-50,150,150);
  }

  if(this.rating === '5')
  {
      image(i9,this.pos.x-10, this.pos.y-50,150,150);
  }

  //text over image

  textAlign(LEFT);
  textSize(12);
fill("red");

text(this.fear, this.pos.x+20, this.pos.y+20);

this.pos.add(this.vel);

if (this.pos.x>width)
this.pos.x=0;
}

}
