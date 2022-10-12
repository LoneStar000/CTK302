let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
switch(state){
  case 0:
    background("grey");
    text("What did one plate whisper to the other plate?", width/2, height/2, 400, 400);

    break;

    case 1:
      background("blue");
      text("Dinner's on me", width/2, height/2)

      break;
}
}

function mouseReleased() {
  state++;
}
