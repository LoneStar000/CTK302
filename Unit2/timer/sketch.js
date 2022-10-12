let timer = 0;
let state = 0;
let i1, i2, i3;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/1.jpg");
  i2 = loadImage("assets/2.jpg");
  i3 = loadImage("assets/3.jpg");
  imageMode(CENTER);
}

function draw() {
  background("grey");
  fill(70);
rect(0, 400, 500, 100);

fill(250);
  switch (state)
  {
    case 0: 
    image(i1, width/2, height/2, 150, 150);
    text("work on renovating my room with new wall panels.", 10, 420);
      break;
  
    case 1: 
    image(i2, width/2, height/2, 150, 150);
    text("set up new shelf using cinder blocks.", 10, 420);
      break;
  
    case 2: 
    image(i3, width/2, height/2, 150, 150);
    text("rest with dogs after working on todays random renovation, \n rinse and repeat", 10, 420);
      break;
  }

  //timer
timer++;
if(timer > 5*60)
{
  timer = 0;
  state++;
  if(state > 2)
  {
    state = 0;
  }
}
}
