function preload(){
  music = loadSound("assets/momentum.mp3");
}
function setup() {
  createCanvas(500, 500);

 music.play();
}

function draw() {
background("darkgrey");
fill("black");

text("Song: Full Momentum", 100, 100, 400, 400);
}

function mouseReleased() {
  if(music.isPlaying()){
    music.pause();
  }
  else{
    music.play();
  }
}



function touchStarted() {
  getAudioContext().resume();
}
