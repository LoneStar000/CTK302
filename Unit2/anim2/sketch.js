let x = 0;

function setup() {
  createCanvas(500, 500);

}

function draw() {
background(100);

push();
translate(x,0);
  avatar();
x+=5;

if(x > width)
{
  x=-500;
}
pop();


fill(80);
rect(0, 400, width, 100);

  
}

//personal function
function avatar() {
//The Shadow
  //head
  fill(45);
  arc(340, 120, 120, 120, PI, TWO_PI);
  
  arc(340, 120, 120, 170, TWO_PI, PI);
  
  fill(30);
  arc(340, 120, 100, 100, PI, TWO_PI);
  arc(340, 120, 100, 160, TWO_PI, PI);
  
  //eyes
    fill(250, 0, 0);
    ellipse(320, 110, 10);
   ellipse(360, 110, 10);
  
  
  //torso
  noStroke();
  fill(45);
   arc(340, 250, 200, 100, PI, TWO_PI);
  rect(240, 250, 200, 200);
  fill(30);
  triangle(340, 210, 330, 400, 290, 400 );
}