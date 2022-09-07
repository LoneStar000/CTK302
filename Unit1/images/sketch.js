let dnd, nier, starwars;

function setup() {
  createCanvas(500, 500);

  dnd = loadImage("assets\dnd.jpg");
  nier = loadImage("assets\nier.jpg");
  starwars = loadImage("assets\starwars.jpg");
  imageMode(CENTER);
}

function draw() {
image(dnd, width/2, height/2 - 100, 200, 200);
image(dnd, width/2, height/2, 200, 200);
image(dnd, width/2, height/2 + 100, 200, 200);
}
