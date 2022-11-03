let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let dark, death, revenge;
let player, slime;

let attack;
let attackPos;

let attackTimer;

function preload() {
  //music = loadSound("assets/obsession.mp3");
  dark = loadSound("assets/Darklight.mp3");
  death = loadSound("assets/death.mp3");
  revenge = loadSound("assets/revenge.mp3");
  
  //images
  player = loadImage("assets/Player.png");
  attack = loadImage("assets/Attack.png");
  slime = loadImage("assets/Slime-01.png");
  forest = loadImage("assets/Dungeon.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  

  

  //imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);

  // Spawn objects

  for (let i = 0; i < 4; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 150);
  attackPos = createVector(0, 0);
}

function draw() {
  
  background(forest);

  switch(state)
    {
      case 0:
        //menu screen
        fill(250);
          text("click to start", width/2, height/2);
        
        textSize(40);
          text("<- and -> keys to move and Z key to attack", width/2, height/3);
        break;
        
      case 1:
        //game screen
        if(!dark.isPlaying()){
          revenge.stop();
          death.stop();
          dark.play();
        }

        game();
        timer++;
        attackTimer++;
        if(timer > 20*60){
          timer = 0;
          state = 3;
        }

        break;
        
        case 2:
        //win screen
        
        if(!revenge.isPlaying()){
          dark.stop();
          revenge.play();
        }
        
        background(forest);
       
        fill('white');
          text("you won!", width/2, height/2);
        break;
        
        case 3:
        //lose screen
        if(!death.isPlaying()){
          dark.stop();
          death.play();
        }
        background(forest);
        
        fill('white');
          text("game over", width/2, height/2);
        break;
    }
}

function mouseReleased(){
  switch(state){
      case 0:
        //menu screen 
          state = 1;
        break;
        
      case 2: 
        //win state
      resetGame();
      state = 0;
        break;
        
        case 3:
        //lose screen
      state = 0;
        break;
  }
}

function game() {
  background(forest);

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    //hitbox
    //if (cars[i].pos.dist(attackPos) < 150) {
      if (cars[i].pos.dist(attackPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if(cars.length <= 0){
    timer = 0;
    state = 2;
  }
  
  // add a "frog"
  //fill("green");
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(player, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();
}

function resetGame(){
  cars = [];
  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)){
    //attackPos.x -5;
    frogPos.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    frogPos.x += 5;
    //attackPos.x += 5;
  }
  if (keyIsDown(90)){
      image(attack, frogPos.x - 4, frogPos.y + 25, 20, 100);
      attackPos = createVector(frogPos.x -4, frogPos.y + 100);
     }
     else{
      attackPos = createVector(0, 0);
     }
  }



class Car {
  // constructor and attributes
  constructor() {
    
    this.pos = createVector(-10, height -50); // initialize your attributes here
    this.velocity = createVector(random(1, 5), 0);
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    // this.o = random(100);
    this.size = random(20, 80);
  }
  // methods

  display() {
    // this can be text, images, or shapes
    //fill(this.r, this.g, this.b, this.o);
    //rect(this.pos.x, this.pos.y, this.size, 25);
    image(slime, this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
