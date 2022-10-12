let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
switch(state){
  case 0:
    background("grey");
    text("What vegetable is cool, but not that cool?", width/2, height/2, 400, 400);

    break;

    case 1:
      background("blue");
      text("radish", width/2, height/2);

      break;
}

rect(10, 350, 100, 100);
text("please click", 20, 370);
}

function mouseReleased() {
if((mouseX > 10) && (mouseX < 110) && (mouseY > 350) && (mouseY < 450)
){
state++;
if (state > 1) 
state = 0;
}

}
