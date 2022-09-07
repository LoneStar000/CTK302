let dnd, nier, starwars;

function setup() {
  createCanvas(500, 500);

  dnd = loadImage("assets/dnd.jpg");
  nier = loadImage("assets/nier.jpg");
  starwars = loadImage("assets/starwars.jpg");
  imageMode(CENTER);
}

function draw() {
  background("grey");
image(dnd, width/2, height/2 - 170, 150, 150);
image(nier, width/2, height/2, 150, 150);
image(starwars, width/2, height/2 + 170, 150, 150);
}
