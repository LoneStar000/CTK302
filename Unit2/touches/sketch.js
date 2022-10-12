let numberOfTouches ;
let dnd, nier, starwars;

function setup() {
  createCanvas(400, 400);

  dnd = loadImage("assets/dnd.jpg");
  nier = loadImage("assets/nier.jpg");
  starwars = loadImage("assets/starwars.jpg");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen", 5, 22) ; 
      break ;
      
      case 1: 
       text("it's kind of lonely here", 5, 22) ; 
      // put a picture here
      image(dnd, width/2, height/2 - 170, 150, 150);
      break ;
      
      case 2:
      text("two fingers are touching the screen", 5, 22) ; 
            // put a picture here
      image(nier, width/2, height/2 - 170, 150, 150);
      break ;
      
      case 3:
     text("three are touching the screen", 5, 22) ; 
            // put a picture here
      image(starwars, width/2, height/2 - 170, 150, 150);
      break ;
    
      
  }
  
}