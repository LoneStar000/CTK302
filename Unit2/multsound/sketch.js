let state = -1;
let s1, s2, s3;

function preload(){
s1 = loadSound("assets/fbattle.mp3");
s2 = loadSound("assets/fkingdom.mp3");
s3 = loadSound("assets/villainvshero.mp3");

}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("grey");

  switch(state){

    case -1:
    
      text("please click to start.", 100, 100);
      break;
    
    case 0:
    if(!s1.isPlaying()){
      s1.play();
    }
    text("The Final Battle \n by Experia", 100, 100);
    break;
  
      case 1:
       background("silver");
        if(!s2.isPlaying()){
          s2.play();
        }
        text("For the Final Kingdom \n Edgar Hopp \n(personal favorite)", 100, 100);
        break;

        case 2:
          background(40);
          if(!s3.isPlaying()){
            s3.play();
          }
          fill(240);
          text("Villain vs Young Hero \n Grant Newman \n also surprisingly good", 100, 100);
          break;
  }


}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if(state > 2)
  {
    state = 0;
  }
}


function touchStarted() {
  getAudioContext().resume();
}