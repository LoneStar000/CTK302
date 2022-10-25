let cars = [];
let forest;

function preload() {
  forest =loadImage("assets/forest.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object

    noStroke();
  
}

function draw() {
  background(forest);
  
  
  text(cars.length, 40, 40);
  cars.push(new Car());
  
  for (i = 0; i < cars.length; i++) {
  cars[i].display();
    cars[i].move();
    if(cars[i].opacity < 0)
      {
        cars.splice(i,1);
      }
  }
}

class Car {
  // constructor
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    //direction
    this.vel = createVector(random(5, 10), random(5, 10));
    //color
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.opacity = random(255);
    
    
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.opacity);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.opacity -= 5;
  }
}

