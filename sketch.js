var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  treasureImg = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight*0.845);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen


  if(score === 3){
    clear()
    background(treasureImg);
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED", 250,200);
  }


  drawSprites()
}