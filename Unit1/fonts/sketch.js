let f1, f2;

function setup() {
  createCanvas(1000, 1000);
  f1 = loadFont("assets/techno_hideo.ttf"); 
  f2 = loadFont("assets/cubic.ttf");
}

function draw() {
  background("black");
  fill("white");
textFont(f1, 48);
text("hello there!", width/2, 100);

textFont(f2, 48);
text("General Kenobi!", width/2, 400);
}
