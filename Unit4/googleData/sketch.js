var bubbles = [];
let url = "";

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  
  let key = "1-RX4LNcr089v6zeQkqEUx_5WX6NNOXDAk82OHnKH5AE"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["what's your favorite anime? "],
        data[i]["Do you have a favorite anime genre?"],
        data[i]["If you could date an anime character, who would it be? (please post the series their from as well. ex. \"Holo, from Spice and Wolf\")"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(happy, thankful, name) {
    // only the order of these parameters matters!
    this.happy = happy;
    this.thankful = thankful;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 4), 1);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 180, 180);
    fill("white");
    text(
      this.name + "\n" + this.happy + "\n" + this.thankful,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel);
    
    if(this.pos.x > width)
      {
        this.pos.x = -5;
      }
    
      if(this.pos.y > height)
      {
        this.pos.y = -5;
      }
    
  }
  
}
