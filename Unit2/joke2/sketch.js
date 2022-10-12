let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);

}

function draw() {
switch(state){
  case 0:
    background("grey");
    text("What's the difference between the bird flu and the swine flu?", width/2 - 200, height/2);

    break;

    case 1:
      background("blue");
      text("One requires tweetment and the other an oinkment.", width/2 - 200, height/2)

      break;
}

timer++;
if(timer > (4 * 60)){
  timer = 0;
  state++;
  if(state > 1)
  {
    state = 0;
  }
}
}

