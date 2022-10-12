let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  
  switch (state){
    case 0:
      background('darkGrey');

      for(let i = 0; i <= width; i+=10)
    {
          for(let j = 0; j <= height; j+=10)
            {
               //rect(i, j, 20, 20);

               fill('lightblue');
               ellipse(i + 5, j + 5, 10, 10);
            }
    }
      fill(10);
      text("case 0", 10, 10);
      break;
      
      case 1:
          for(let i = 0; i <= width; i+=5)
    {
          for(let j = 0; j <= height; j+=5)
            {
    
      fill(random(0, 255));
      rect(i, j, 20, 20);
            }
    }
      fill(0, 0, 255);
      text("case 1", 10, 10);
      break;
      
      case 2:
        for(let i = 0; i <= width; i+=10)
        {
              for(let j = 0; j <= height; j+=10)
                {
                  fill('silver');
                  stroke('grey');
                   ellipse(i + 5, j + 5, 30, 30);
                }
        }
        fill(255);
      text("case 2", 10, 10);
      break;
      
            case 3:
      background('blue');
      for(let i = 0; i <= width; i+=20)
      {
        fill(0, 0, random(100, 255));
            for(let j = 0; j <= height; j+=20)
              {
                 rect(i, j, 25, 25);
  
                
                 ellipse(i + 5, j + 5, 20, 20);
              }
      }
      fill(255);
      text("case 3", 10, 10);
      break;
      
            case 4:
      background('blue');

      for(let i = 0; i <= width + 60; i+=20)
      {
            for(let j = 0; j <= height + 60; j+=20)
              {
                rect(i, j, 60, 60);
                 ellipse(i, j, 100, 100)
                  fill(random(50, 255));
                  
              }
      }
      fill(255);
      text("case 4", 10, 10);
      break;
  }
}
  
function mouseReleased(){
  state++;
  
  if(state > 4)
    {
      state = 0;
    }
}

