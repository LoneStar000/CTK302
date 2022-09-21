let x = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/techno_hideo.ttf"); 
}

function draw() {
  background(100);

  fill(70);
rect(x, 100, 200, 100);

fill(180);
textFont(f1, 58);
text("booo", x + 10, 170);
x += 4;

if(x > width){
  x = -250;
}
}
